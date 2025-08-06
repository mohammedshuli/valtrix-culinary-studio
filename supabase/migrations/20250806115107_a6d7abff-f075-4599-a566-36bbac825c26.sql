-- Create user profiles table
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create culinary modules table
CREATE TABLE culinary_modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  learning_outcomes TEXT[],
  category TEXT CHECK (category IN (
    'kitchen_foundations',
    'ingredient_preparation',
    'heat_cooking_methods',
    'cold_kitchen_plating',
    'pastry_baking_desserts',
    'global_local_cuisine',
    'menu_design_costing',
    'food_safety_waste_management',
    'professional_etiquette'
  )),
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced', 'pro_chef')) DEFAULT 'beginner',
  duration_weeks INTEGER,
  price_tzs INTEGER NOT NULL,
  cover_image_url TEXT,
  promo_video_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lessons table
CREATE TABLE lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES culinary_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  is_preview BOOLEAN DEFAULT FALSE,
  video_url TEXT NOT NULL,
  duration_minutes INTEGER,
  summary TEXT,
  practical_task TEXT,
  quiz_questions JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create enrollments table
CREATE TABLE enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES auth.users(id),
  module_id UUID REFERENCES culinary_modules(id),
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  amount_paid INTEGER,
  currency TEXT DEFAULT 'TZS',
  transaction_id TEXT,
  UNIQUE(student_id, module_id)
);

-- Create lesson progress table
CREATE TABLE lesson_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES auth.users(id),
  lesson_id UUID REFERENCES lessons(id),
  module_id UUID REFERENCES culinary_modules(id),
  status TEXT DEFAULT 'completed',
  quiz_score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, lesson_id)
);

-- Create catering packages table
CREATE TABLE catering_packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  package_name TEXT NOT NULL,
  price_tsh INTEGER NOT NULL,
  minimum_order INTEGER NOT NULL,
  package_image_url TEXT,
  starters TEXT[],
  main_dishes TEXT[],
  accompaniments TEXT[],
  vegetables TEXT[],
  salads TEXT[],
  fruits TEXT[],
  desserts TEXT[],
  drinks TEXT[],
  optional_addons TEXT[],
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create catering bookings table
CREATE TABLE catering_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT CHECK (service_type IN ('catering', 'package', 'course', 'consultation')),
  service_id UUID,
  event_type TEXT,
  event_date DATE,
  guest_count INTEGER,
  menu_preference TEXT,
  budget TEXT,
  venue_location TEXT,
  special_requirements TEXT,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
  total_cost INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create menu items table
CREATE TABLE menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT CHECK (category IN ('appetizers', 'main_courses', 'desserts', 'drinks', 'sides')),
  price INTEGER NOT NULL,
  image_url TEXT,
  dietary_info TEXT[],
  is_signature BOOLEAN DEFAULT FALSE,
  prep_time INTEGER,
  difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  event_type TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  client_photo TEXT,
  event_photos TEXT[],
  is_featured BOOLEAN DEFAULT FALSE,
  service_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create gallery images table
CREATE TABLE gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT,
  category TEXT CHECK (category IN ('plating', 'events', 'workshops', 'private_dinners', 'behind_the_scenes')),
  tags TEXT[],
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact inquiries table
CREATE TABLE contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT CHECK (status IN ('new', 'read', 'archived')) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE culinary_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE catering_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE catering_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Public read access for published courses
CREATE POLICY "Public courses are viewable by everyone" ON culinary_modules
  FOR SELECT USING (is_published = true);

-- Public read access for lessons of published courses
CREATE POLICY "Public lessons are viewable by everyone" ON lessons
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM culinary_modules 
      WHERE culinary_modules.id = lessons.module_id 
      AND culinary_modules.is_published = true
    )
  );

-- Students can only see their own enrollments
CREATE POLICY "Students can view own enrollments" ON enrollments
  FOR SELECT USING (auth.uid() = student_id);

-- Students can create their own enrollments
CREATE POLICY "Students can create own enrollments" ON enrollments
  FOR INSERT WITH CHECK (auth.uid() = student_id);

-- Students can only update their own progress
CREATE POLICY "Students can manage own progress" ON lesson_progress
  FOR ALL USING (auth.uid() = student_id);

-- Public read for catering packages
CREATE POLICY "Catering packages are public" ON catering_packages
  FOR SELECT TO public USING (true);

-- Anyone can create catering bookings
CREATE POLICY "Anyone can create catering bookings" ON catering_bookings
  FOR INSERT TO public WITH CHECK (true);

-- Public read for menu items
CREATE POLICY "Menu items are public" ON menu_items
  FOR SELECT TO public USING (true);

-- Public read for featured testimonials
CREATE POLICY "Featured testimonials are public" ON testimonials
  FOR SELECT TO public USING (is_featured = true);

-- Public read for gallery images
CREATE POLICY "Gallery images are public" ON gallery_images
  FOR SELECT TO public USING (true);

-- Anyone can create contact inquiries
CREATE POLICY "Anyone can create contact inquiries" ON contact_inquiries
  FOR INSERT TO public WITH CHECK (true);

-- Users can manage their own profiles
CREATE POLICY "Users can manage own profile" ON user_profiles
  FOR ALL USING (auth.uid() = id);

-- Insert some sample data
INSERT INTO culinary_modules (title, description, long_description, learning_outcomes, category, difficulty, duration_weeks, price_tzs, is_published, order_index) VALUES
('Kitchen Foundations & Safety', 'Master the fundamentals of professional kitchen operations', 'Learn essential kitchen safety protocols, equipment handling, and basic cooking techniques that form the foundation of professional culinary skills.', ARRAY['Kitchen safety protocols', 'Equipment operation', 'Basic knife skills', 'Food hygiene standards'], 'kitchen_foundations', 'beginner', 4, 180000, true, 1),
('Ingredient Preparation Mastery', 'Advanced techniques for ingredient preparation and storage', 'Develop expertise in ingredient selection, preparation methods, and proper storage techniques essential for professional cooking.', ARRAY['Ingredient selection', 'Prep techniques', 'Storage methods', 'Quality control'], 'ingredient_preparation', 'intermediate', 3, 150000, true, 2),
('Heat Cooking Methods', 'Master various heat-based cooking techniques', 'Learn all essential heat cooking methods including grilling, roasting, frying, and braising to create exceptional dishes.', ARRAY['Grilling techniques', 'Roasting methods', 'Frying mastery', 'Braising skills'], 'heat_cooking_methods', 'intermediate', 5, 220000, true, 3);

INSERT INTO catering_packages (package_name, price_tsh, minimum_order, starters, main_dishes, accompaniments, vegetables, salads, fruits, desserts, drinks, is_featured) VALUES
('Basic Wali Combo', 10000, 30, ARRAY[]::TEXT[], ARRAY['Wali wa Nazi', 'Pilau', 'Ndizi Nyama'], ARRAY['Chapati', 'Mkate wa Nazi'], ARRAY['Mboga za Majani', 'Karanga'], ARRAY['Kachumbari', 'Carrot Salad'], ARRAY['Watermelon', 'Banana', 'Orange'], ARRAY['Vanilla Cake'], ARRAY['Juice', 'Soda'], true),
('Premium Feast', 25000, 50, ARRAY['Samosa', 'Spring Rolls'], ARRAY['Nyama Choma', 'Fish Curry', 'Chicken Biryani'], ARRAY['Naan', 'Rice Pilau'], ARRAY['Mixed Vegetables', 'Spinach'], ARRAY['Greek Salad', 'Caesar Salad'], ARRAY['Tropical Fruit Mix'], ARRAY['Chocolate Mousse', 'Tiramisu'], ARRAY['Fresh Juice', 'Wine'], true),
('Traditional Tanzanian', 15000, 40, ARRAY['Vitumbua', 'Kashata'], ARRAY['Ugali with Meat Stew', 'Wali wa Mchuzi', 'Grilled Tilapia'], ARRAY['Mandazi', 'Sweet Potatoes'], ARRAY['Sukuma Wiki', 'Njegere'], ARRAY['Tomato Onion Salad'], ARRAY['Mango', 'Papaya', 'Pineapple'], ARRAY['Halwa', 'Coconut Cake'], ARRAY['Tamarind Juice', 'Ginger Tea'], false);

INSERT INTO menu_items (name, description, category, price, dietary_info, is_signature, prep_time, difficulty_level) VALUES
('Nyama Choma Special', 'Grilled beef with traditional spices and accompaniments', 'main_courses', 18000, ARRAY['Gluten-free'], true, 45, 'medium'),
('Pilau ya Nyama', 'Aromatic spiced rice with tender beef pieces', 'main_courses', 15000, ARRAY['Dairy-free'], true, 60, 'medium'),
('Samosa za Nyama', 'Crispy pastries filled with spiced meat', 'appetizers', 3000, ARRAY[]::TEXT[], false, 30, 'easy'),
('Ugali na Mchuzi', 'Traditional cornmeal with rich meat sauce', 'main_courses', 12000, ARRAY['Gluten-free', 'Dairy-free'], false, 40, 'easy'),
('Coconut Rice Pudding', 'Creamy dessert with coconut and cardamom', 'desserts', 8000, ARRAY['Vegetarian'], false, 25, 'easy');

INSERT INTO testimonials (client_name, event_type, rating, review_text, is_featured, service_date) VALUES
('Amina Hassan', 'Wedding Reception', 5, 'Valtrix Chef Pro made our wedding day absolutely perfect! The food was exceptional and the service was professional. Our guests are still talking about the amazing Pilau and Nyama Choma.', true, '2024-06-15'),
('John Mwamba', 'Corporate Event', 5, 'Outstanding catering service for our company event. The team was punctual, professional, and the food quality exceeded our expectations. Highly recommended!', true, '2024-07-20'),
('Fatma Kondo', 'Birthday Celebration', 4, 'Great experience with Valtrix Chef Pro. The traditional Tanzanian menu was authentic and delicious. Perfect for our family celebration.', false, '2024-08-10');

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for timestamp updates
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_culinary_modules_updated_at BEFORE UPDATE ON culinary_modules FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
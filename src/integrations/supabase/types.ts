export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      catering_bookings: {
        Row: {
          budget: string | null
          client_name: string
          created_at: string | null
          email: string
          event_date: string | null
          event_type: string | null
          guest_count: number | null
          id: string
          menu_preference: string | null
          phone: string
          service_id: string | null
          service_type: string | null
          special_requirements: string | null
          status: string | null
          total_cost: number | null
          venue_location: string | null
        }
        Insert: {
          budget?: string | null
          client_name: string
          created_at?: string | null
          email: string
          event_date?: string | null
          event_type?: string | null
          guest_count?: number | null
          id?: string
          menu_preference?: string | null
          phone: string
          service_id?: string | null
          service_type?: string | null
          special_requirements?: string | null
          status?: string | null
          total_cost?: number | null
          venue_location?: string | null
        }
        Update: {
          budget?: string | null
          client_name?: string
          created_at?: string | null
          email?: string
          event_date?: string | null
          event_type?: string | null
          guest_count?: number | null
          id?: string
          menu_preference?: string | null
          phone?: string
          service_id?: string | null
          service_type?: string | null
          special_requirements?: string | null
          status?: string | null
          total_cost?: number | null
          venue_location?: string | null
        }
        Relationships: []
      }
      catering_packages: {
        Row: {
          accompaniments: string[] | null
          created_at: string | null
          desserts: string[] | null
          drinks: string[] | null
          fruits: string[] | null
          id: string
          is_featured: boolean | null
          main_dishes: string[] | null
          minimum_order: number
          optional_addons: string[] | null
          package_image_url: string | null
          package_name: string
          price_tsh: number
          salads: string[] | null
          starters: string[] | null
          vegetables: string[] | null
        }
        Insert: {
          accompaniments?: string[] | null
          created_at?: string | null
          desserts?: string[] | null
          drinks?: string[] | null
          fruits?: string[] | null
          id?: string
          is_featured?: boolean | null
          main_dishes?: string[] | null
          minimum_order: number
          optional_addons?: string[] | null
          package_image_url?: string | null
          package_name: string
          price_tsh: number
          salads?: string[] | null
          starters?: string[] | null
          vegetables?: string[] | null
        }
        Update: {
          accompaniments?: string[] | null
          created_at?: string | null
          desserts?: string[] | null
          drinks?: string[] | null
          fruits?: string[] | null
          id?: string
          is_featured?: boolean | null
          main_dishes?: string[] | null
          minimum_order?: number
          optional_addons?: string[] | null
          package_image_url?: string | null
          package_name?: string
          price_tsh?: number
          salads?: string[] | null
          starters?: string[] | null
          vegetables?: string[] | null
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
        }
        Relationships: []
      }
      culinary_modules: {
        Row: {
          category: string | null
          cover_image_url: string | null
          created_at: string | null
          description: string
          difficulty: string | null
          duration_weeks: number | null
          id: string
          is_published: boolean | null
          learning_outcomes: string[] | null
          long_description: string | null
          order_index: number | null
          price_tzs: number
          promo_video_url: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description: string
          difficulty?: string | null
          duration_weeks?: number | null
          id?: string
          is_published?: boolean | null
          learning_outcomes?: string[] | null
          long_description?: string | null
          order_index?: number | null
          price_tzs: number
          promo_video_url?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          description?: string
          difficulty?: string | null
          duration_weeks?: number | null
          id?: string
          is_published?: boolean | null
          learning_outcomes?: string[] | null
          long_description?: string | null
          order_index?: number | null
          price_tzs?: number
          promo_video_url?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          amount_paid: number | null
          currency: string | null
          enrollment_date: string | null
          id: string
          module_id: string | null
          payment_status: string | null
          student_id: string | null
          transaction_id: string | null
        }
        Insert: {
          amount_paid?: number | null
          currency?: string | null
          enrollment_date?: string | null
          id?: string
          module_id?: string | null
          payment_status?: string | null
          student_id?: string | null
          transaction_id?: string | null
        }
        Update: {
          amount_paid?: number | null
          currency?: string | null
          enrollment_date?: string | null
          id?: string
          module_id?: string | null
          payment_status?: string | null
          student_id?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "culinary_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_images: {
        Row: {
          caption: string | null
          category: string | null
          created_at: string | null
          id: string
          image_url: string
          is_featured: boolean | null
          tags: string[] | null
        }
        Insert: {
          caption?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          image_url: string
          is_featured?: boolean | null
          tags?: string[] | null
        }
        Update: {
          caption?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          image_url?: string
          is_featured?: boolean | null
          tags?: string[] | null
        }
        Relationships: []
      }
      lesson_progress: {
        Row: {
          completed_at: string | null
          id: string
          lesson_id: string | null
          module_id: string | null
          quiz_score: number | null
          status: string | null
          student_id: string | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          module_id?: string | null
          quiz_score?: number | null
          status?: string | null
          student_id?: string | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          module_id?: string | null
          quiz_score?: number | null
          status?: string | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_progress_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "culinary_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string | null
          duration_minutes: number | null
          id: string
          is_preview: boolean | null
          module_id: string | null
          order_index: number
          practical_task: string | null
          quiz_questions: Json | null
          summary: string | null
          title: string
          video_url: string
        }
        Insert: {
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          is_preview?: boolean | null
          module_id?: string | null
          order_index: number
          practical_task?: string | null
          quiz_questions?: Json | null
          summary?: string | null
          title: string
          video_url: string
        }
        Update: {
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          is_preview?: boolean | null
          module_id?: string | null
          order_index?: number
          practical_task?: string | null
          quiz_questions?: Json | null
          summary?: string | null
          title?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "culinary_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_items: {
        Row: {
          category: string | null
          created_at: string | null
          description: string
          dietary_info: string[] | null
          difficulty_level: string | null
          id: string
          image_url: string | null
          is_signature: boolean | null
          name: string
          prep_time: number | null
          price: number
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description: string
          dietary_info?: string[] | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          is_signature?: boolean | null
          name: string
          prep_time?: number | null
          price: number
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string
          dietary_info?: string[] | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          is_signature?: boolean | null
          name?: string
          prep_time?: number | null
          price?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          client_name: string
          client_photo: string | null
          created_at: string | null
          event_photos: string[] | null
          event_type: string
          id: string
          is_featured: boolean | null
          rating: number | null
          review_text: string
          service_date: string | null
        }
        Insert: {
          client_name: string
          client_photo?: string | null
          created_at?: string | null
          event_photos?: string[] | null
          event_type: string
          id?: string
          is_featured?: boolean | null
          rating?: number | null
          review_text: string
          service_date?: string | null
        }
        Update: {
          client_name?: string
          client_photo?: string | null
          created_at?: string | null
          event_photos?: string[] | null
          event_type?: string
          id?: string
          is_featured?: boolean | null
          rating?: number | null
          review_text?: string
          service_date?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

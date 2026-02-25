
export enum UserRole {
  ADMIN = 'ADMIN',
  CSM = 'CSM',
  SUPPORT = 'SUPPORT'
}

export type ThemeType = 'light' | 'dark' | 'system';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  status?: 'active' | 'blocked';
  password?: string;
}

export interface Client {
  id: string;
  name: string;
  csmId: string | null; // Changed to single ID
  supportId: string | null; // Changed to single ID
  segment?: string;
  importance?: 'High' | 'Medium' | 'Low';
  onboardingUserId?: string | null;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  linkedClientIds?: string[]; // New: Support multiple linked companies
  lastTicketDate?: string;
}

export interface EmailConfig {
  isEnabled: boolean;
  provider: 'gmail' | 'outlook' | 'smtp';
  email: string;
  password?: string;
  host?: string;
  port?: string;
  senderName?: string;
  encryption?: 'none' | 'ssl' | 'tls';
  connectedAt?: string;
}

export interface TicketHistoryEntry {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  user: string;
  subject?: string; // New: For email subjects
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  clientId: string | null;
  clientName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  locations: string[];
  category: string;
  type: string;
  status: string;
  priority: string;
  assignedCsmId: string | null;
  assignedSupportId: string | null;
  createdAt: string;
  updatedAt: string;
  history: TicketHistoryEntry[];
}

export interface ConfigItem {
  id: string;
  name: string;
  color: string; // Hex code or Tailwind class reference if needed, preferably Hex for picker
}

export interface SLARule {
  id: string;
  name?: string; // Friendly name for the rule
  priorityId: string | 'all'; 
  typeId: string | 'all'; 
  categoryId?: string | 'all'; 
  csmId?: string | 'all'; 
  supportId?: string | 'all'; 
  clientIds?: string[]; // NEW: Specific clients
  businessHoursOnly?: boolean; // NEW: Business hours logic
  hours: number; // Resolution Time
  responseHours?: number; // NEW: First Response Time
  color?: string; // Visual color for the rule badge
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  logoUrl?: string; 
  logoAlignment?: 'left' | 'center' | 'right'; 
  bodyColor?: string; 
  fontFamily?: string; 
  accentColor?: string; 
}

// Enhanced Automation Rule Structure
export interface AutomationRule {
  id: string;
  name: string;
  isActive: boolean;
  
  // The Event
  trigger: 
    // Lifecycle
    | 'ticket_created' 
    | 'ticket_resolved' 
    | 'ticket_closed'
    | 'ticket_reopened' 
    | 'ticket_deleted'
    // Updates
    | 'ticket_updated'
    | 'status_changed' 
    | 'priority_changed'
    | 'category_changed'
    | 'type_changed'
    // Assignment
    | 'ticket_assigned'
    | 'ticket_unassigned'
    // Communication
    | 'new_comment' 
    | 'new_internal_note' 
    | 'customer_reply' 
    // SLA & Time
    | 'sla_warning'
    | 'sla_breached'
    | 'hours_since_created' 
    | 'hours_since_updated'
    | 'hours_since_last_response';
  
  // The Conditions
  conditions: {
    all?: boolean; // Match ALL or ANY (default ALL)
    
    // Field Filters
    priorityFilter?: string | 'ANY'; 
    statusFilter?: string | 'ANY';
    categoryFilter?: string | 'ANY';
    typeFilter?: string | 'ANY';
    
    // Context Filters
    clientFilter?: string[] | 'ANY'; // IDs
    assigneeFilter?: string | 'ANY' | 'UNASSIGNED';
    
    // Content Filters
    titleContains?: string;
    descriptionContains?: string;
    
    // Change Logic (for 'changed' triggers)
    fromValue?: string | 'ANY'; 
    toValue?: string | 'ANY';
  };

  // The Reaction
  actionType: 
    | 'send_email' 
    | 'change_status'      
    | 'change_priority'    
    | 'assign_owner'       
    | 'add_internal_note'
    | 'send_webhook';      
  
  // Action Configuration
  actionConfig: {
    templateId?: string;
    targetRole?: 'CSM' | 'SUPPORT' | 'REQUESTER' | 'ADMIN' | 'ASSIGNEE' | 'CUSTOM';
    customEmail?: string;
    targetStatus?: string;
    targetPriority?: string;
    targetAssignment?: 'CSM_CLIENT' | 'SUPPORT_CLIENT' | 'UNASSIGN' | string; 
    noteContent?: string;
    webhookUrl?: string;
  };
}

export interface AppSettings {
  categories: ConfigItem[];
  requestTypes: ConfigItem[];
  statuses: ConfigItem[];
  priorities: ConfigItem[];
  slaRules: SLARule[];
  emailTemplates: EmailTemplate[];
  automationRules: AutomationRule[];
}

export interface TicketFilters {
    priority: string[];
    status: string[];
    category: string[];
    client: string | null;
    assignedTo: string | null;
    startDate: string | null; 
    endDate: string | null;   
}
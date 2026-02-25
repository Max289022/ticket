import { User, UserRole, Client, Ticket, AppSettings } from './types';

export const INITIAL_USERS: User[] = [
  { id: 'u1', name: 'Ana Silva', email: 'ana@hublocal.com', role: UserRole.CSM, avatar: 'https://picsum.photos/id/101/100/100' },
  { id: 'u2', name: 'Carlos Souza', email: 'carlos@hublocal.com', role: UserRole.CSM, avatar: 'https://picsum.photos/id/102/100/100' },
  { id: 'u3', name: 'Beatriz Lima', email: 'bea@hublocal.com', role: UserRole.SUPPORT, avatar: 'https://picsum.photos/id/103/100/100' },
  { id: 'u4', name: 'Daniel Rocha', email: 'daniel@hublocal.com', role: UserRole.SUPPORT, avatar: 'https://picsum.photos/id/104/100/100' },
];

export const INITIAL_CLIENTS: Client[] = [
  { id: 'c1', name: 'Padaria do João', csmId: 'u1', supportId: 'u3' },
  { id: 'c2', name: 'Tech Solutions Ltda', csmId: 'u2', supportId: 'u4' },
  { id: 'c3', name: 'Mercado Central', csmId: 'u1', supportId: 'u3' },
];

export const INITIAL_SETTINGS: AppSettings = {
  categories: [
    { id: 'cat1', name: 'Financeiro', color: '#10B981' }, // Emerald
    { id: 'cat2', name: 'Técnico', color: '#3B82F6' }, // Blue
    { id: 'cat3', name: 'Conteúdo', color: '#8B5CF6' }, // Violet
    { id: 'cat4', name: 'Plataforma', color: '#F59E0B' }, // Amber
    { id: 'cat5', name: 'Integração', color: '#EC4899' }  // Pink
  ],
  requestTypes: [
    { id: 'req1', name: 'Bug', color: '#EF4444' }, // Red
    { id: 'req2', name: 'Dúvida', color: '#6B7280' }, // Gray
    { id: 'req3', name: 'Solicitação de Acesso', color: '#3B82F6' },
    { id: 'req4', name: 'Atualização de Dados', color: '#10B981' },
    { id: 'req5', name: 'Cancelamento', color: '#000000' }
  ],
  statuses: [
    { id: 'st1', name: 'Novo', color: '#3B82F6' }, // Blue
    { id: 'st2', name: 'Em Atendimento', color: '#8B5CF6' }, // Purple
    { id: 'st3', name: 'Pendente', color: '#F59E0B' }, // Amber
    { id: 'st4', name: 'Resolvido', color: '#10B981' }, // Green
    { id: 'st5', name: 'Fechado', color: '#6B7280' } // Gray
  ],
  priorities: [
    { id: 'pr1', name: 'Low', color: '#10B981' },
    { id: 'pr2', name: 'Medium', color: '#3B82F6' },
    { id: 'pr3', name: 'High', color: '#F59E0B' },
    { id: 'pr4', name: 'Critical', color: '#EF4444' }
  ],
  slaRules: [
    { id: 'sla1', priorityId: 'pr4', typeId: 'all', hours: 4 }, // Critical = 4h
    { id: 'sla2', priorityId: 'pr3', typeId: 'all', hours: 8 }, // High = 8h
    { id: 'sla3', priorityId: 'pr2', typeId: 'all', hours: 24 }, // Medium = 24h
    { id: 'sla4', priorityId: 'pr1', typeId: 'all', hours: 48 }, // Low = 48h
  ],
  emailTemplates: [
    {
      id: 'tpl1',
      name: 'Confirmação de Abertura',
      subject: 'Recebemos sua solicitação #{ticket_id}',
      body: 'Olá {contact_name},\n\nRecebemos seu ticket "{ticket_title}" referente a {client_name}.\n\nNossa equipe já está analisando e retornará em breve.\n\nAtenciosamente,\nEquipe Hublocal'
    }
  ],
  automationRules: []
};

export const INITIAL_TICKETS: Ticket[] = [
  {
    id: 't1',
    title: 'Erro no login da plataforma',
    description: 'Não consigo acessar minha conta desde hoje cedo. Aparece erro 500.',
    clientId: 'c1',
    clientName: 'Padaria do João',
    contactName: 'João Silva',
    contactEmail: 'joao@padaria.com',
    contactPhone: '(11) 99999-9999',
    locations: ['Unidade Centro', 'Unidade Sul'],
    category: 'Plataforma',
    type: 'Bug',
    status: 'Novo',
    priority: 'High',
    assignedCsmId: 'u1',
    assignedSupportId: 'u3',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    history: []
  },
  {
    id: 't2',
    title: 'Atualizar horário de funcionamento',
    description: 'Gostaria de alterar o horário de fechamento para as 22h nas sextas-feiras.',
    clientId: 'c2',
    clientName: 'Tech Solutions Ltda',
    contactName: 'Mariana Costa',
    contactEmail: 'mariana@techsolutions.com',
    contactPhone: '(21) 98888-8888',
    locations: ['Matriz'],
    category: 'Conteúdo',
    type: 'Atualização de Dados',
    status: 'Em Atendimento',
    priority: 'Low',
    assignedCsmId: 'u2',
    assignedSupportId: 'u4',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 100000).toISOString(),
    history: [
      {
        id: 'h1',
        timestamp: new Date(Date.now() - 100000).toISOString(),
        action: 'Status alterado',
        details: 'de "Novo" para "Em Atendimento"',
        user: 'Admin'
      }
    ]
  }
];
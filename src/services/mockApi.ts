import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const iso = () => new Date().toISOString()

function parseBody(config: InternalAxiosRequestConfig): Record<string, unknown> {
  const raw = config.data
  if (raw == null) return {}
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as Record<string, unknown>
    } catch {
      return {}
    }
  }
  if (typeof FormData !== 'undefined' && raw instanceof FormData) {
    return { _formData: true }
  }
  if (typeof raw === 'object') return raw as Record<string, unknown>
  return {}
}

function ok<T>(config: InternalAxiosRequestConfig, data: T, status = 200): AxiosResponse<T> {
  return {
    data,
    status,
    statusText: 'OK',
    headers: { 'content-type': 'application/json' },
    config,
  } as AxiosResponse<T>
}

function normPath(config: InternalAxiosRequestConfig): string {
  const base = (config.baseURL || '').replace(/\/$/, '')
  let u = config.url || ''
  if (u.includes('?')) u = u.split('?')[0]
  if (u.startsWith('http')) {
    try {
      u = new URL(u).pathname
    } catch {
      /* keep */
    }
  }
  let path = `${base}/${u.replace(/^\//, '')}`.replace(/\/+/g, '/')
  if (!path.startsWith('/')) path = `/${path}`
  return path.replace(/\/$/, '') || '/'
}

const sectionRow = (id: string, title: string) => ({
  id,
  title,
  description_one: `Descrição demo — ${title}`,
  image_one: '/assets/portal/imgs/image.svg',
  created_at: iso(),
  updated_at: iso(),
})

const emptyMonth = () => [{ _sum: { negotiated_value: 0 }, active: true }]
const targetMonth = () => [{ value_target: 10000 }]

export function resolveMockResponse(config: InternalAxiosRequestConfig): AxiosResponse {
  const method = (config.method || 'get').toUpperCase()
  const path = normPath(config)
  const body = parseBody(config)

  if (method === 'POST' && path === '/v1/login') {
    const email = (body.email as string) || 'demo@acme-cloud.example'
    return ok(config, {
      token: 'demo-portfolio-token',
      user: {
        id: 'demo-user-1',
        name: 'Usuário Demo',
        email,
        avatar_url: '',
      },
    })
  }

  if (method === 'POST' && path === '/v1/users/create') {
    return ok(config, { id: 'new-user', ...body })
  }

  if (method === 'PUT' && path === '/profile') {
    return ok(config, {
      id: 'demo-user-1',
      name: body.name,
      email: body.email,
      avatar_url: '',
    })
  }

  if (method === 'PATCH' && path === '/users/avatar') {
    return ok(config, {
      id: 'demo-user-1',
      name: 'Usuário Demo',
      email: 'demo@acme-cloud.example',
      avatar_url: 'https://picsum.photos/seed/acme-avatar/200',
    })
  }

  if (method === 'POST' && path.startsWith('/v1/')) {
    return ok(config, { ok: true, id: `mock-${Date.now()}`, ...body })
  }

  if (method === 'DELETE') {
    return ok(config, { ok: true })
  }

  if (method === 'GET' && path === '/v1/dashboard/') {
    return ok(config, {
      totalUsers: 12,
      totalProjects: 5,
      totalContracts: 8,
      totalFeedbacks: 3,
    })
  }

  if (method === 'GET' && path === '/v1/dashboard/active') {
    return ok(config, {
      activeUsers: 10,
      activeProjects: 4,
      activeContracts: 6,
    })
  }

  if (method === 'GET' && path === '/v1/dashboard/contracts') {
    const months: Record<string, ReturnType<typeof emptyMonth>> = {}
    const keys = [
      'janContracts',
      'fevContracts',
      'marContracts',
      'abrContracts',
      'maiContracts',
      'junContracts',
      'julContracts',
      'agoContracts',
      'setContracts',
      'outContracts',
      'novContracts',
      'dezContracts',
    ]
    keys.forEach((k) => {
      months[k] = emptyMonth()
    })
    return ok(config, months)
  }

  if (method === 'GET' && path === '/v1/dashboard/target_contracts') {
    return ok(config, {
      january: targetMonth(),
      february: targetMonth(),
      march: targetMonth(),
      april: targetMonth(),
      may: targetMonth(),
      june: targetMonth(),
      july: targetMonth(),
      august: targetMonth(),
      september: targetMonth(),
      october: targetMonth(),
      november: targetMonth(),
      december: targetMonth(),
    })
  }

  if (method === 'GET' && path === '/v1/users/') {
    const users = [
      {
        id: '1',
        name: 'Ana Demo',
        email: 'ana@example.com',
        password: '',
        avatar: '',
        active: true,
        type_user: 'Admin',
        created_at: iso(),
      },
    ]
    return ok(config, { totalPage: 1, users })
  }

  const userIdMatch = path.match(/^\/v1\/users\/([^/]+)$/)
  if (method === 'GET' && userIdMatch && userIdMatch[1] !== '') {
    const id = userIdMatch[1]
    return ok(config, {
      id,
      name: 'Ana Demo',
      email: 'ana@example.com',
      password: '',
      avatar: '',
      active: true,
      type_user: 'Admin',
      type_user_id: 'type-1',
      created_at: iso(),
    })
  }

  if (method === 'GET' && path === '/v1/status/') {
    return ok(config, {
      totalPage: 1,
      status: [
        {
          id: 's1',
          name: 'Em andamento',
          description: 'Status demo',
          active: true,
          created_at: new Date(),
        },
      ],
    })
  }

  const statusOne = path.match(/^\/v1\/status\/findOne\/(.+)$/)
  if (method === 'GET' && statusOne) {
    return ok(config, {
      totalPage: 1,
      status: [
        {
          id: statusOne[1],
          name: 'Em andamento',
          description: 'Demo',
          active: true,
          created_at: new Date(),
        },
      ],
    })
  }

  if (method === 'GET' && path === '/v1/sectionOne/findAll') {
    const rows = [sectionRow('sec-1', 'Seção 1 — demo')]
    return ok(config, { totalPage: 1, sectionsOne: rows })
  }

  const sectionFindOne = path.match(/^\/v1\/(sectionOne|sectionTwo|sectionThree|sectionFor|sectionFive)\/findOne\/(.+)$/)
  if (method === 'GET' && sectionFindOne) {
    return ok(config, sectionRow(sectionFindOne[2], `Item ${sectionFindOne[2]}`))
  }

  const sectionList = path.match(/^\/v1\/(sectionOne|sectionTwo|sectionThree|sectionFour|sectionFive)\/?$/)
  if (method === 'GET' && sectionList) {
    const key = sectionList[1]
    return ok(config, [sectionRow(`${key}-1`, `${key} — conteúdo demo`)])
  }

  if (method === 'GET' && path === '/v1/home') {
    return ok(config, [
      {
        id: 'h1',
        title: 'Acme Cloud',
        link: '/',
        logo: null as unknown as HTMLElement,
      },
    ])
  }

  if (method === 'GET' && path === '/v1/menu') {
    return ok(config, [
      { id: 'm1', title: 'Início', link: '/', logo: null as unknown as HTMLElement },
      { id: 'm2', title: 'Sobre', link: '#sobre', logo: null as unknown as HTMLElement },
    ])
  }

  if (method === 'GET' && path === '/v1/footer/titles') {
    return ok(config, [
      { id: 't1', name: 'Empresa', link: '#', footer_titles_id: 't1', copyright: '', midia_social_one: '', midia_social_two: '', midia_social_tree: '', midia_social_for: '' },
      { id: 't2', name: 'Suporte', link: '#', footer_titles_id: 't2', copyright: '', midia_social_one: '', midia_social_two: '', midia_social_tree: '', midia_social_for: '' },
    ])
  }

  if (method === 'GET' && path === '/v1/footer/links') {
    return ok(config, [
      { id: 'l1', name: 'Sobre nós', link: '#sobre', footer_titles_id: 't1', copyright: '', midia_social_one: '', midia_social_two: '', midia_social_tree: '', midia_social_for: '' },
      { id: 'l2', name: 'Contato', link: '#contato', footer_titles_id: 't2', copyright: '', midia_social_one: '', midia_social_two: '', midia_social_tree: '', midia_social_for: '' },
    ])
  }

  if (method === 'GET' && path === '/v1/footer/midias') {
    return ok(config, [
      {
        id: 'md1',
        name: 'Redes',
        link: '#',
        footer_titles_id: '',
        copyright: '© Acme Cloud — demo portfolio',
        midia_social_one: '',
        midia_social_two: '',
        midia_social_tree: '',
        midia_social_for: '',
      },
    ])
  }

  if (method === 'GET' && /^\/v1\/testimonial\/?$/.test(path)) {
    return ok(config, [
      {
        id: 'ts1',
        title: 'Parceiro demo',
        description: 'Excelente parceria para o nosso time.',
        icon: '/assets/testimonial/hubspot.png',
        author: 'Cliente fictício',
      },
    ])
  }

  if (method === 'GET' && path === '/v1/feedback/findAll') {
    return ok(config, {
      totalPage: 1,
      feedbacks: [
        {
          id: 'fb1',
          type: 'BUG',
          comment: 'Exemplo de feedback (dados mock).',
          screenshot: '',
          created_at: iso(),
          updated_at: iso(),
        },
      ],
    })
  }

  const projectFindOne = path.match(/^\/v1\/project\/findOne\/(.+)$/)
  if (method === 'GET' && projectFindOne) {
    const id = projectFindOne[1]
    return ok(config, {
      id,
      type: 'IDEA',
      comment: 'Feedback vinculado ao mock de projeto.',
      screenshot: '',
      created_at: iso(),
      updated_at: iso(),
      name: 'Projeto demo',
      description: 'Descrição',
      active: true,
      date_start: iso(),
      date_end: iso(),
      progress: '50',
      negotiated_value: 10000,
      real_cost: 5000,
      status: { id: '1', name: 'Ativo' },
      user: { id: '1', name: 'Ana Demo' },
      project: { id: 'p1', name: 'Projeto Alpha' },
    })
  }

  if (method === 'GET' && path === '/v1/project/findAll') {
    return ok(config, {
      totalPage: 1,
      projects: [
        {
          id: 'p1',
          name: 'Projeto Alpha (demo)',
          description: 'Escopo fictício',
          active: true,
          date_start: iso(),
          date_end: iso(),
          progress: '40',
          negotiated_value: 25000,
          real_cost: 8000,
          status: { id: '1', name: 'Ativo' },
          user: { id: '1', name: 'Ana Demo' },
          created_at: iso(),
        },
      ],
    })
  }

  const clientFindOne = path.match(/^\/v1\/client\/findOne\/(.+)$/)
  if (method === 'GET' && clientFindOne) {
    const id = clientFindOne[1]
    return ok(config, {
      id,
      name_company: 'Empresa Demo Ltda',
      name_contact: 'Contato Demo',
      segmentation: 'Tech',
      description: 'Cliente fictício',
      email: 'contato@empresa-demo.example',
      phone: '0000-0000',
      whats: '',
      active: true,
      type_client: 'GOLD',
      user: { id: '1', name: 'Ana Demo' },
      created_at: iso(),
    })
  }

  if (method === 'GET' && path === '/v1/client/findAll') {
    return ok(config, {
      totalPage: 1,
      clients: [
        {
          id: 'c1',
          name_company: 'Empresa Demo Ltda',
          name_contact: 'João',
          segmentation: 'SaaS',
          description: 'Cliente demo',
          email: 'cliente@example.com',
          phone: '11999999999',
          whats: '',
          active: true,
          type_client: 'BASIC',
          user: { id: '1', name: 'Ana Demo' },
          created_at: iso(),
        },
      ],
    })
  }

  const contractFindOne = path.match(/^\/v1\/contract\/findOne\/(.+)$/)
  if (method === 'GET' && contractFindOne) {
    const id = contractFindOne[1]
    return ok(config, {
      id,
      name: 'Contrato demo',
      description: 'Objeto do contrato fictício',
      active: true,
      date_start: iso(),
      date_end: iso(),
      negotiated_value: 50000,
      phase_contract: 'Execução',
      progress: '30',
      user: { id: '1', name: 'Ana Demo' },
      created_at: iso(),
    })
  }

  if (method === 'GET' && path === '/v1/contract/findAll') {
    return ok(config, {
      totalPage: 1,
      contracts: [
        {
          id: 'ct1',
          name: 'Contrato demo',
          description: 'Escopo fictício',
          active: true,
          date_start: iso(),
          date_end: iso(),
          negotiated_value: 120000,
          phase_contract: 'Planejamento',
          user: { id: '1', name: 'Ana Demo' },
          created_at: iso(),
        },
      ],
    })
  }

  const sprintFindOne = path.match(/^\/v1\/sprint\/findOne\/(.+)$/)
  if (method === 'GET' && sprintFindOne) {
    const id = sprintFindOne[1]
    return ok(config, {
      id,
      name: 'Sprint demo',
      description: 'Entregas fictícias',
      active: true,
      date_start: iso(),
      date_end: iso(),
      status: { id: '1', name: 'Ativo' },
      user: { id: '1', name: 'Ana Demo' },
      project: { id: 'p1', name: 'Projeto Alpha' },
      created_at: iso(),
      updated_at: iso(),
    })
  }

  if (method === 'GET' && path === '/v1/sprint/findAll') {
    return ok(config, {
      totalPage: 1,
      sprints: [
        {
          id: 'sp1',
          name: 'Sprint 1 (demo)',
          description: 'Objetivos fictícios',
          active: true,
          date_start: iso(),
          date_end: iso(),
          status: { id: '1', name: 'Ativo' },
          user: { id: '1', name: 'Ana Demo' },
          created_at: iso(),
          updated_at: iso(),
        },
      ],
    })
  }

  if (method === 'GET' && path === '/v1/stories-sprint/findAll') {
    return ok(config, {
      totalPage: 1,
      sprints: [
        {
          id: 'st1',
          name: 'História demo',
          description: 'User story fictícia',
          active: true,
          date_start: iso(),
          date_end: iso(),
          status: { id: '1', name: 'Backlog' },
          user: { id: '1', name: 'Ana Demo' },
          created_at: iso(),
          updated_at: iso(),
        },
      ],
    })
  }

  if (method === 'GET' && path === '/v1/menu-portal/') {
    return ok(config, {
      findMenuPortal: [
        {
          id: 'mp1',
          title: 'Dashboard',
          link: '/dashboard',
          active: true,
          created_at: iso(),
          updated_at: iso(),
          submenu_portal: [{ title: 'Visão geral', link: '/dashboard' }],
        },
      ],
      findSubMenuPortal: [],
    })
  }

  return ok(config, {
    totalPage: 0,
    users: [],
    projects: [],
    clients: [],
    contracts: [],
    feedbacks: [],
    sprints: [],
    sectionsOne: [],
    status: [],
    findMenuPortal: [],
    findSubMenuPortal: [],
    _mockUnmatched: { method, path },
  })
}

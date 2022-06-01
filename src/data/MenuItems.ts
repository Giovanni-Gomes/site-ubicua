
export const menuItems = [
  {
    title: 'Dashboard',
    submenu: [
      {
        title: 'Gerencial / Status Report'
      }
    ]
  },
  {
    title: 'Operações',
    submenu: [
      {
        title: 'Feedbacks'
      },
      {
        title: 'Retornar Feedback'
      }
    ]
  },
  {
    title: 'Desenvolvimento',
    submenu: [
      {
        title: 'Equipe / Squad'
      },
      {
        title: 'Projetos'
      },
      {
        title: 'Acompanhamentos',
        submenu: [
          {
            title: 'Programação'
          },
          {
            title: 'Produção'
  
          },
          {
            title: 'Medição'
          },
        ]
      },
    ]
  },
  {
    title: 'Contrato',
    submenu: [
      {
        title: 'Contratos'
      },
      {
        title: 'Tipos de Serviços'
      },
      {
        title: 'Empresas'
      },
      {
        title: 'Portifólio'
      },
      {
        title: 'Orçamentos'
      },
    ]
  }
];

export type menuItem = keyof typeof menuItems
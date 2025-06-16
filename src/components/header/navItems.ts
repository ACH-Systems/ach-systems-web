export type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Servicios",
    path: "/",
  },
  {
    name: "Nosotros",
    path: "/nosotros/",
  },
  {
    name: "Portafolio",
    path: "/proyectos/",
  },
  {
    name: "Contacto",
    path: "/contacto/",
  },
];

export { navItems };

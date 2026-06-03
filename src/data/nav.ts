import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    label: "Inicio",
    href: "#home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`,
  },
  {
    label: "Experiencia",
    href: "#experience",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 6H16V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V6H4C3.44772 6 3 6.44772 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 6.44772 20.5523 6 20 6ZM10 5H14V6H10V5Z"></path></svg>`,
  },
  {
    label: "Proyectos",
    href: "#projects",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>`,
  },
  {
    label: "Educación",
    href: "#education",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3L1 9L5 11.1667V17.1667L12 21L19 17.1667V11.1667L21 10.1667V17H23V9L12 3ZM18.9167 9L12 12.6L5.08333 9L12 5.4L18.9167 9ZM17 15.8333L12 18.4L7 15.8333V12.1667L12 14.6L17 12.1667V15.8333Z"></path></svg>`,
  },
  {
    label: "Contacto",
    href: "#contact",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>`,
  },
];

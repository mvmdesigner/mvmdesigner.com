interface NavigationData extends Array<NavigationData>  {
  name: string;
  path: string;
  icon?: {
      pack?: string;
      name?: string;
      side?: "left" | "right"
  }
}

const navData = [
    {
      name: "Home",
      path: "/",
      icon: {
        pack: "mdi",
        name: "account",
        side: "left"
      }
    },
    {
        name: "Contact",
        path: "/contact",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: {
        pack: "mdi",
        name: "account",
        side: "right"
      }
    },
  ] as NavigationData;
  
  export default navData;
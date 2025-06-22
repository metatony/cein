const navigationMenuItems = [
  {
    page: "Shop",
    link: "/shop",
    header: "Categories",
    subItems: [
      { page: "Bag", link: "/categories/bag" },
      { page: "Clothing", link: "/categories/clothing" },
      { page: "Leather Goods", link: "/categories/leather-goods" },
      { page: "Gifts", link: "/categories/gifts" },
    ],
  },
  {
    page: "Stores",
    link: "/stores",
    header: "Collections",
    subItems: [
      { page: "Office Look", link: "/collections/office-look" },
      { page: "Selection", link: "/collections/selection" },
      { page: "Party and Events", link: "/collections/party-events" },
      { page: "Online Exclusive", link: "/collections/online-exclusive" },
      { page: "Knitwear", link: "/collections/knitwear" },
    ],
  },
  {
    page: "Faq",
    link: "/faq",
    header: "Featured",
    subItems: [
      { page: "New Arrivals", link: "/featured/new-arrivals" },
      { page: "Best Sellers", link: "/featured/best-sellers" },
      { page: "Trending Now", link: "/featured/trending-now" },
      { page: "Loungewear", link: "/featured/loungewear" },
    ],
  },

  {
    page: "About",
    link: "/about",
    header: "about",
    subItems: [
      { page: "Stories", link: "/products/category1" },
      { page: "Blog", link: "/products/category2" },
      { page: "Newsroom", link: "/products/category3" },
    ],
  },
];

export default navigationMenuItems;

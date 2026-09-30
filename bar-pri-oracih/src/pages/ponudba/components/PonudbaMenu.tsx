import { useState } from 'react';

type MenuItem = { name: string; price: string };

interface Category {
  id: string;
  icon: string;
  title: string;
  bgImage: string;
  sections: { subtitle?: string; items: MenuItem[] }[];
}

const categories: Category[] = [
  {
    id: 'kava',
    icon: 'ri-cup-line',
    title: 'Topli napitki',
    bgImage:
      'https://readdy.ai/api/search-image?query=Extremely%20photorealistic%20closeup%20of%20a%20freshly%20brewed%20cappuccino%20with%20perfect%20latte%20art%20heart%20pattern%20on%20a%20rustic%20wooden%20caf%C3%A9%20table%2C%20morning%20sunlight%20streaming%20through%20window%20creating%20soft%20natural%20shadows%2C%20scattered%20coffee%20beans%20on%20saucer%2C%20steam%20rising%20from%20cup%2C%20professional%20commercial%20coffee%20photography%2C%20Canon%2085mm%20f1.4%20lens%2C%20shallow%20depth%20of%20field%2C%20warm%20inviting%20tones%2C%20authentic%20Italian%20caf%C3%A9%20atmosphere%2C%20editorial%20food%20photography%2C%20high%20resolution%20DSLR%20shot%2C%20natural%20lighting%20only%2C%20no%20artificial%20styling%20or%20CGI&width=1400&height=700&seq=ponudba-coffee-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        subtitle: 'Kava',
        items: [
          { name: 'Espresso / dolga kava', price: '1,50 €' },
          { name: 'Macchiato', price: '1,50 €' },
          { name: 'Bela kava', price: '2,20 €' },
          { name: 'Mala bela kava', price: '1,90 €' },
          { name: 'Kava z mlekom', price: '1,70 €' },
          { name: 'Kava s smetano', price: '1,80 €' },
          { name: 'Cappuccino', price: '1,80 €' },
          { name: 'Cappuccino instant', price: '1,80 €' },
          { name: 'Brezkofeinska kava', price: '1,60 €' },
          { name: 'Brezkofeinska kava z mlekom', price: '1,80 €' },
          { name: 'Brezkofeinska kava s smetano', price: '1,90 €' },
          { name: 'Brezkofeinska bela kava', price: '2,30 €' },
          { name: 'Brezkofeinska mala bela kava', price: '2,00 €' },
          { name: 'Brezkofeinski cappuccino', price: '1,90 €' },
          { name: 'Otroški cappuccino', price: '1,00 €' },
        ],
      },
      {
        subtitle: 'Čokolada & čaj',
        items: [
          { name: 'Kakav', price: '2,00 €' },
          { name: 'Kakav s smetano', price: '2,40 €' },
          { name: 'Vroča čokolada', price: '2,40 €' },
          { name: 'Vroča čokolada s smetano', price: '2,80 €' },
          { name: 'Čaj', price: '1,70 €' },
          { name: 'Čaj z limono', price: '1,90 €' },
          { name: 'Čaj z rumom', price: '3,20 €' },
        ],
      },
      {
        subtitle: 'Latte',
        items: [
          { name: 'Latte macchiato', price: '2,20 €' },
          { name: 'Monin latte macchiato', price: '2,80 €' },
          { name: 'Ledena kava', price: '2,50 €' },
          { name: 'Monin ledena kava', price: '2,90 €' },
        ],
      },
      {
        subtitle: 'Dodatki',
        items: [
          { name: 'Rezina limone', price: '0,20 €' },
          { name: 'Med', price: '0,50 €' },
          { name: 'Smetana', price: '0,40 €' },
          { name: 'Mleko 0,1 l', price: '0,40 €' },
          { name: 'Sirup Monin 0,03 l', price: '0,80 €' },
          { name: 'Lonček »to go«', price: '0,20 €' },
        ],
      },
    ],
  },
  {
    id: 'piva',
    icon: 'ri-goblet-line',
    title: 'Piva',
    bgImage:
      'https://readdy.ai/api/search-image?query=Ultra%20realistic%20commercial%20product%20photography%20of%20cold%20beer%20bottles%20with%20heavy%20water%20condensation%20droplets%20on%20glass%2C%20golden%20lager%20pouring%20into%20a%20tall%20pilsner%20glass%20with%20thick%20creamy%20white%20foam%20head%2C%20on%20a%20dark%20polished%20wooden%20bar%20counter%2C%20warm%20amber%20backlight%20glow%2C%20professional%20beer%20advertising%20photography%2C%20100mm%20macro%20lens%2C%20crystal%20clear%20details%2C%20authentic%20pub%20atmosphere%2C%20rich%20golden%20and%20amber%20tones%2C%20editorial%20drink%20photography%2C%20high%20end%20commercial%20DSLR%20shot%2C%20no%20illustration%20or%20digital%20art&width=1400&height=700&seq=ponudba-beer-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Zlatorog 0,33 l', price: '2,50 €' },
          { name: 'Zlatorog 0,5 l', price: '2,60 €' },
          { name: 'Zlatorog 0,0 % 0,5 l', price: '2,60 €' },
          { name: 'Union 0,33 l', price: '2,50 €' },
          { name: 'Union 0,5 l', price: '2,60 €' },
          { name: 'Radler 0,5 l', price: '2,70 €' },
          { name: 'Kozel temni 0,5 l', price: '2,70 €' },
          { name: 'Heineken točeno 0,1 l', price: '1,30 €' },
          { name: 'Heineken točeno 0,25 l', price: '2,60 €' },
          { name: 'Heineken točeno 0,5 l', price: '3,50 €' },
          { name: 'Heineken 0,0 % 0,33 l', price: '2,50 €' },
          { name: 'Heineken steklenica 0,33 l', price: '2,50 €' },
          { name: 'Smile 0,33 l', price: '2,60 €' },
          { name: 'Malt 0,33 l', price: '2,50 €' },
          { name: 'Ožujsko 0,33 l', price: '2,50 €' },
          { name: 'Diesel 0,2 l', price: '2,50 €' },
          { name: 'Diesel 0,3 l', price: '2,90 €' },
          { name: 'Diesel 0,5 l', price: '3,90 €' },
        ],
      },
    ],
  },
  {
    id: 'cocktaili',
    icon: 'ri-flask-line',
    title: 'Koktajli',
    bgImage:
      'https://readdy.ai/api/search-image?query=Highly%20realistic%20professional%20cocktail%20photography%20of%20a%20freshly%20made%20mojito%20in%20a%20highball%20glass%20with%20crushed%20ice%2C%20fresh%20green%20mint%20leaves%20and%20lime%20wedges%20glistening%2C%20heavy%20condensation%20on%20glass%20surface%2C%20on%20a%20dark%20sophisticated%20bar%20counter%20with%20subtle%20reflections%2C%20warm%20moody%20bar%20lighting%2C%2085mm%20prime%20lens%2C%20beautiful%20bokeh%20background%20with%20soft%20out%20of%20focus%20bottles%2C%20authentic%20mixology%20bar%20setting%2C%20editorial%20quality%2C%20sharp%20details%20on%20mint%20leaves%20and%20ice%20texture%2C%20no%20computer%20generated%20imagery&width=1400&height=700&seq=ponudba-cocktail-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Mojito', price: '4,00 €' },
          { name: 'Bacardi Razz', price: '4,00 €' },
          { name: 'Cuba Libre', price: '4,00 €' },
          { name: 'Pina Colada', price: '5,50 €' },
          { name: 'Blue Lagoon', price: '5,50 €' },
        ],
      },
    ],
  },
  {
    id: 'vina',
    icon: 'ri-goblet-2-line',
    title: 'Vina',
    bgImage:
      'https://readdy.ai/api/search-image?query=Photorealistic%20wine%20photography%20of%20a%20bottle%20of%20Slovenian%20white%20wine%20next%20to%20two%20filled%20crystal%20wine%20glasses%20with%20golden%20liquid%2C%20on%20a%20weathered%20rustic%20wooden%20farmhouse%20table%2C%20natural%20soft%20daylight%20from%20side%20window%2C%20vineyard%20landscape%20visible%20through%20blurred%20window%20background%2C%20professional%20food%20and%20wine%20photography%2C%2050mm%20lens%2C%20authentic%20Mediterranean%20countryside%20atmosphere%2C%20warm%20earthy%20tones%2C%20editorial%20magazine%20quality%2C%20real%20textures%20on%20wood%20grain%20and%20glass%20reflections%2C%20no%20artificial%20rendering&width=1400&height=700&seq=ponudba-wine-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Domače belo vino 0,1 l', price: '1,10 €' },
          { name: 'Domače belo vino 1 l', price: '11,00 €' },
          { name: 'Škropec z domačim vinom 0,1 l', price: '1,20 €' },
          { name: 'Špricar z domačim vinom 0,2 l', price: '1,40 €' },
          { name: 'Refošk 1 l', price: '12,00 €' },
          { name: 'Refošk 0,1 l', price: '1,20 €' },
          { name: 'Bambus 0,2 l', price: '2,40 €' },
          { name: 'Cviček 1 l', price: '12,00 €' },
          { name: 'Cviček 0,1 l', price: '1,20 €' },
          { name: 'Cviček špricar 0,2 l', price: '1,50 €' },
          { name: 'Janževec 1 l', price: '12,00 €' },
          { name: 'Janževec 0,1 l', price: '1,20 €' },
          { name: 'Janževec špricar 0,2 l', price: '1,50 €' },
          { name: 'Haložan 1 l', price: '12,00 €' },
          { name: 'Haložan 0,1 l', price: '1,20 €' },
          { name: 'Haložan špricar 0,2 l', price: '1,50 €' },
          { name: 'Sladki refošk 0,1 l', price: '2,70 €' },
          { name: 'Rumeni muškat 0,1 l', price: '2,90 €' },
          { name: 'Vino Pubec 0,1 l', price: '1,50 €' },
          { name: 'Hugo 0,1 l', price: '2,50 €' },
          { name: 'Martini 0,1 l', price: '2,50 €' },
        ],
      },
    ],
  },
  {
    id: 'kuhancici',
    icon: 'ri-temp-hot-line',
    title: 'Kuhančki',
    bgImage:
      'https://readdy.ai/api/search-image?query=Extremely%20realistic%20closeup%20photograph%20of%20a%20ceramic%20mug%20filled%20with%20steaming%20hot%20mulled%20red%20wine%2C%20cinnamon%20stick%20and%20dried%20orange%20slice%20floating%20in%20the%20dark%20spiced%20liquid%2C%20star%20anise%20scattered%20on%20the%20rustic%20wooden%20table%20surface%20beside%20the%20mug%2C%20soft%20warm%20candlelight%20illumination%2C%20cozy%20winter%20evening%20atmosphere%2C%20professional%20food%20photography%2C%2085mm%20macro%20lens%2C%20authentic%20steam%20capture%2C%20rich%20deep%20red%20and%20amber%20tones%2C%20hygge%20aesthetic%2C%20editorial%20cookbook%20quality%2C%20no%20digital%20art%20or%20illustration&width=1400&height=700&seq=ponudba-mulled-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Belo kuhano vino', price: '2,50 €' },
          { name: 'Monin belo kuhano vino', price: '2,70 €' },
          { name: 'Rdeče kuhano vino', price: '2,50 €' },
          { name: 'Monin rdeče kuhano vino', price: '2,70 €' },
          { name: 'Kuhan gin', price: '3,50 €' },
          { name: 'Vroči punč z rumom', price: '4,00 €' },
        ],
      },
    ],
  },
  {
    id: 'whiskey',
    icon: 'ri-drinks-2-line',
    title: 'Whiskey',
    bgImage:
      'https://readdy.ai/api/search-image?query=Ultra%20realistic%20commercial%20whiskey%20photography%20of%20a%20crystal%20tumbler%20filled%20with%20amber%20whiskey%20and%20a%20single%20large%20ice%20cube%2C%20premium%20whiskey%20bottle%20with%20label%20visible%20in%20soft%20background%20blur%2C%20on%20a%20dark%20mahogany%20tabletop%20with%20subtle%20reflections%2C%20warm%20golden%20side%20lighting%20creating%20beautiful%20highlights%20through%20the%20glass%2C%20professional%20spirits%20advertising%20photography%2C%20100mm%20macro%20lens%2C%20authentic%20bar%20atmosphere%2C%20rich%20cognac%20and%20amber%20tones%2C%20high%20end%20editorial%20quality%2C%20real%20glass%20textures%20and%20liquid%20clarity%2C%20no%20CGI&width=1400&height=700&seq=ponudba-whiskey-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: "Ballantine's 0,03 l", price: '2,50 €' },
          { name: 'Canadian Club 0,03 l', price: '2,70 €' },
          { name: 'Chivas Regal 0,03 l', price: '3,50 €' },
          { name: "Jack Daniel's 0,03 l", price: '2,70 €' },
          { name: 'Jameson 0,03 l', price: '2,70 €' },
          { name: "Shanky's Whip 0,03 l", price: '3,00 €' },
        ],
      },
    ],
  },
  {
    id: 'zgane',
    icon: 'ri-goblet-line',
    title: 'Žgane pijače',
    bgImage:
      'https://readdy.ai/api/search-image?query=Highly%20realistic%20professional%20bar%20photography%20of%20assorted%20premium%20spirit%20bottles%20including%20gin%20vodka%20rum%20and%20tequila%20lined%20up%20on%20an%20illuminated%20back%20bar%20glass%20shelf%2C%20warm%20golden%20backlight%20creating%20beautiful%20bottle%20silhouettes%2C%20crystal%20clear%20glassware%20in%20foreground%2C%20sophisticated%20nightclub%20bar%20atmosphere%2C%2050mm%20lens%2C%20authentic%20venue%20photography%2C%20rich%20amber%20and%20crystal%20tones%2C%20editorial%20bar%20culture%20magazine%20quality%2C%20real%20glass%20reflections%20and%20label%20details%2C%20no%20artificial%20generation&width=1400&height=700&seq=ponudba-spirits-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Gin Sax, Bickens, Millhill\'s 0,03 l', price: '2,20 €' },
          { name: 'Gin Bombay, Parson, Whitley 0,03 l', price: '3,00 €' },
          { name: 'Bacardi 0,03 l', price: '2,20 €' },
          { name: 'Konjak Courvoisier 0,03 l', price: '4,00 €' },
          { name: 'Konjak Hennessy V.S. 0,03 l', price: '4,00 €' },
          { name: 'Puschkin 0,03 l', price: '2,00 €' },
          { name: 'Domači rum 0,03 l', price: '1,80 €' },
          { name: 'Rum Angostura, Bush 0,03 l', price: '3,00 €' },
          { name: 'Stock 0,03 l', price: '2,00 €' },
          { name: 'Tavžentroža 0,03 l', price: '2,00 €' },
          { name: 'Tequila 0,03 l', price: '2,50 €' },
          { name: 'Mandljeva tequila 0,03 l', price: '2,50 €' },
          { name: 'Travarica 0,03 l', price: '2,00 €' },
          { name: 'Viljamovka 0,03 l', price: '2,50 €' },
          { name: 'Vodka 0,03 l', price: '2,20 €' },
          { name: 'Vecchia 0,03 l', price: '2,00 €' },
        ],
      },
    ],
  },
  {
    id: 'likerji',
    icon: 'ri-emotion-happy-line',
    title: 'Likerji in grenčice',
    bgImage:
      'https://readdy.ai/api/search-image?query=Photorealistic%20product%20photography%20of%20colorful%20liqueur%20and%20amaro%20bottles%20arranged%20on%20a%20rustic%20wooden%20shelf%2C%20small%20crystal%20tasting%20glasses%20filled%20with%20jewel%20toned%20herbal%20and%20fruit%20liqueurs%20in%20emerald%20green%20ruby%20red%20and%20amber%2C%20warm%20natural%20light%20from%20side%20window%2C%20authentic%20Italian%20digestivo%20collection%20display%2C%2085mm%20lens%2C%20real%20glass%20textures%2C%20traditional%20European%20bar%20atmosphere%2C%20editorial%20spirits%20magazine%20quality%2C%20rich%20saturated%20natural%20colors%2C%20no%20digital%20rendering&width=1400&height=700&seq=ponudba-liqueur-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Amaro 0,03 l', price: '2,00 €' },
          { name: 'Baileys 0,03 l', price: '2,50 €' },
          { name: 'Borovničev liker 0,03 l', price: '2,00 €' },
          { name: 'Campari 0,03 l', price: '2,00 €' },
          { name: 'Cynar 0,03 l', price: '2,00 €' },
          { name: 'Hruškov liker 0,03 l', price: '2,00 €' },
          { name: 'Jägermeister 0,03 l', price: '2,50 €' },
          { name: 'Malibu 0,03 l', price: '2,20 €' },
          { name: 'Mentol 0,03 l', price: '2,00 €' },
          { name: 'Pelinkovec 0,03 l', price: '2,00 €' },
          { name: 'Orehovec 0,03 l', price: '2,00 €' },
          { name: 'Smrekovec 0,03 l', price: '2,00 €' },
          { name: 'Vana Tallinn liker 0,03 l', price: '2,00 €' },
          { name: 'Višnjev liker 0,03 l', price: '2,00 €' },
        ],
      },
    ],
  },
  {
    id: 'brezalkoholne-stekl',
    icon: 'ri-drinks-line',
    title: 'Brezalk. stekleničke',
    bgImage:
      'https://readdy.ai/api/search-image?query=Extremely%20realistic%20commercial%20beverage%20photography%20of%20ice%20cold%20Coca%20Cola%20glass%20contour%20bottles%20with%20heavy%20water%20condensation%20droplets%2C%20Fanta%20orange%20and%20Sprite%20green%20bottles%20beside%20them%2C%20on%20a%20dark%20polished%20bar%20counter%20with%20dramatic%20side%20lighting%20creating%20beautiful%20reflections%2C%20professional%20product%20advertising%20photography%2C%20100mm%20macro%20lens%2C%20authentic%20convenience%20store%20cooler%20aesthetic%2C%20crisp%20details%20on%20bottle%20labels%20and%20condensation%2C%20deep%20moody%20background%2C%20no%20illustration%20or%203D%20rendering%2C%20real%20commercial%20product%20shot&width=1400&height=700&seq=ponudba-soft-hero-03&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Coca-Cola 0,25 l', price: '2,50 €' },
          { name: 'Coca-Cola Zero 0,25 l', price: '2,50 €' },
          { name: 'Cockta 0,275 l', price: '2,50 €' },
          { name: 'Fanta 0,25 l', price: '2,50 €' },
          { name: 'Ledeni čaj 0,25 l', price: '2,50 €' },
          { name: 'Schweppes 0,25 l', price: '2,50 €' },
          { name: 'Sprite 0,25 l', price: '2,50 €' },
          { name: 'Orangina 0,25 l', price: '2,60 €' },
          { name: 'Sok Rauch – steklenička 0,25 l', price: '2,50 €' },
          { name: 'Red Bull', price: '3,00 €' },
        ],
      },
    ],
  },
  {
    id: 'brezalkoholne-tocene',
    icon: 'ri-temp-cold-line',
    title: 'Točene brezalk.',
    bgImage:
      'https://readdy.ai/api/search-image?query=Highly%20realistic%20bright%20and%20fresh%20beverage%20photography%20of%20a%20tall%20glass%20filled%20with%20homemade%20lemonade%20with%20ice%20cubes%2C%20fresh%20lemon%20slices%20and%20green%20mint%20leaves%2C%20condensation%20on%20the%20glass%2C%20on%20a%20sunlit%20outdoor%20wooden%20table%20with%20natural%20bokeh%20garden%20background%2C%20professional%20food%20photography%2C%2050mm%20lens%2C%20authentic%20summer%20refreshment%2C%20natural%20daylight%2C%20vibrant%20yellow%20and%20green%20tones%2C%20editorial%20lifestyle%20magazine%20quality%2C%20real%20textures%20and%20natural%20lighting%2C%20no%20artificial%20styling&width=1400&height=700&seq=ponudba-draft-soft-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Naravna limonada 0,3 l', price: '2,30 €' },
          { name: 'Monin limonada 0,3 l', price: '2,50 €' },
          { name: 'Monin ledeni čaj 0,3 l', price: '2,50 €' },
          { name: 'Cedevita', price: '2,00 €' },
          { name: 'Coca-Cola 0,1 l', price: '1,20 €' },
          { name: 'Sok 0,1 l', price: '1,20 €' },
          { name: 'Ora Exotic 0,1 l', price: '1,20 €' },
          { name: 'Fanta 0,1 l', price: '1,20 €' },
          { name: 'Schweppes 0,1 l', price: '1,20 €' },
        ],
      },
    ],
  },
  {
    id: 'vode',
    icon: 'ri-drop-line',
    title: 'Vode',
    bgImage:
      'https://readdy.ai/api/search-image?query=Ultra%20realistic%20product%20photography%20of%20a%20sparkling%20mineral%20water%20glass%20bottle%20with%20condensation%2C%20poured%20into%20a%20crystal%20clear%20glass%20with%20ice%20cubes%20and%20a%20fresh%20lemon%20wedge%2C%20on%20a%20clean%20white%20marble%20surface%2C%20soft%20natural%20daylight%20from%20window%2C%20professional%20beverage%20advertising%20photography%2C%20100mm%20macro%20lens%2C%20crystal%20clear%20details%2C%20pure%20and%20refreshing%20aesthetic%2C%20authentic%20commercial%20shot%2C%20real%20glass%20textures%20and%20water%20bubbles%2C%20no%20computer%20generated%20imagery&width=1400&height=700&seq=ponudba-water-hero-02&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Radenska 0,1 l', price: '0,30 €' },
          { name: 'Radenska 1 l', price: '3,00 €' },
          { name: 'Radenska steklenička 0,25 l', price: '1,80 €' },
          { name: 'Voda z okusom – steklenička', price: '1,80 €' },
        ],
      },
    ],
  },
  {
    id: 'slushiji',
    icon: 'ri-snowy-line',
    title: 'Slushiji',
    bgImage:
      'https://readdy.ai/api/search-image?query=Extremely%20photorealistic%20closeup%20food%20photography%20of%20a%20tall%20clear%20plastic%20cup%20filled%20with%20layered%20vibrant%20red%20cherry%20and%20electric%20blue%20raspberry%20slushie%20ice%2C%20thick%20frosty%20frozen%20texture%2C%20heavy%20condensation%20droplets%20on%20cup%20exterior%2C%20colorful%20straw%20and%20fresh%20fruit%20garnish%20on%20rim%2C%20dark%20blurred%20bar%20interior%20background%20with%20warm%20neon%20reflections%2C%20professional%20summer%20beverage%20photography%2C%20100mm%20macro%20lens%2C%20authentic%20street%20food%20festival%20quality%2C%20real%20ice%20crystal%20texture%2C%20no%20digital%20art%20or%20illustration&width=1400&height=700&seq=ponudba-slush-hero-03&orientation=landscape&nocache=true',
    sections: [
      {
        items: [
          { name: 'Slushi 0,3 l', price: '3,00 €' },
        ],
      },
    ],
  },
];

export default function PonudbaMenu() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section className="w-full pb-20 md:pb-28">
      {/* Category tabs */}
      <div className="sticky top-16 z-40 bg-background-50/95 backdrop-blur-md border-b border-background-200/70">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-heading font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-700 hover:bg-background-200'
                }`}
              >
                <i className={`${cat.icon} text-sm`}></i>
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category hero image */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <img
          key={current.id}
          src={current.bgImage}
          alt={current.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500/90 backdrop-blur-sm">
            <i className={`${current.icon} text-lg text-white`}></i>
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white drop-shadow-md">
            {current.title}
          </h2>
        </div>
      </div>

      {/* Menu items */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <div className="space-y-10">
          {current.sections.map((section, si) => (
            <div key={si}>
              {section.subtitle && (
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground-900">
                    {section.subtitle}
                  </h3>
                  <div className="flex-1 h-px bg-background-200"></div>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between px-4 py-3 bg-background-100 hover:bg-background-200/70 rounded-lg border border-background-200/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                      <span className="text-sm text-foreground-800 font-medium truncate">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary-600 whitespace-nowrap ml-3 font-heading">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
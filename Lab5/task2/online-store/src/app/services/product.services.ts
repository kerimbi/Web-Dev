import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Small kitchen appliances' },
    { id: 2, name: 'Small appliances for the home' },
    { id: 3, name: 'Climate control equipment'},
    { id: 4, name: 'Large appliances for the home' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Пароочиститель atreon DFHS-01 белый, черный',
      description: 'Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома: Пароочиститель. Отпариватель. Стеклоочиститель Подходит для полов, мебели, кухни, плитки, духовки, одежды, авто и сантехники.',
      price: 29900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pf7/70456234.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/59895568.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p51/p0d/59895569.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 2,
      name: 'Аэрогриль minMAX MNF-5017 12 л черный',
      description: 'Электрический аэрогриль LIVO — современный и мощный кухонный помощник для быстрого и полезного приготовления блюд. Благодаря двум независимым камерам вы можете готовить два разных блюда одновременно, экономя время и делая процесс готовки максимально удобным.',
      price: 79890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p23/89950663.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p20/89950675.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/p1d/89950681.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p1c/89950687.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/p18/89950698.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/minmax-mnf-5017-chernyi-153169274/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Пылесос LUMO Aqua X серый',
      description: 'Мощный пылесос с аквафильтром для качественной уборки. Эффективно собирает пыль и увлажняет воздух.',
      price: 220000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/pcd/79325201.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/pcd/79325202.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pcd/79325203.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pcc/79325205.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/79325206.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lumo-aqua-x-seryi-148897809/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 4,
      name: 'Увлажнитель воздуха MiBaby Mi001 белый',
      description: 'Компактный увлажнитель воздуха для создания комфортного микроклимата в помещении. Ультразвуковой, тихий, с подсветкой.',
      price: 4990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p35/8582074.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 5,
      name: 'Отпариватель MONTERO PRO S200 розовый',
      description: 'Ищете надежного помощника для быстрой и эффективной глажки одежды? Представляем вам отпариватель MONTERO PRO S200 — идеальный выбор для тех, кто ценит качество и удобство!',
      price: 45890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/pec/18583732.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/paf/18583733.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pb3/18583734.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcb/pb6/18583735.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/pbd/18583737.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-montero-pro-s200-rozovyi-132998486/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 6,
      name: 'Пароочиститель Denx SE8620 желтый',
      description: 'Компактный пароочиститель для чистки различных поверхностей. Удаляет загрязнения без химии.',
      price: 37800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd9/57310129.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/pd6/57310130.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/pd6/57310131.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/pd6/57310132.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-denx-se8620-zheltyi-130443158/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 7,
      name: 'Отпариватель AEROLITH STEAM-01 серый, черный, розовый',
      description: 'Представляем вашему вниманию ручной отпариватель - современное решение для ухода за одеждой и текстилем в домашних условиях, в профессиональной деятельности или путешествиях.',
      price: 13900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p53/97764459.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6e/p76/71880757.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p79/71880761.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p79/71880765.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-aerolith-steam-01-seryi-chernyi-rozovyi-147800146/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Пылесос Menox R01 фиолетовый, серый',
      description: 'Menox R01 — это лёгкий и удобный пылесос для быстрой уборки «здесь и сейчас». Он станет незаменимым помощником, когда нужно быстро собрать крошки, шерсть животных или пыль.',
      price: 33900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/pd0/96953174.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p7b/66840701.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p7b/66840702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p7b/66840707.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/menox-r01-fioletovyi-seryi-135631137/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Отпариватель AEROLITH Steam Garment Premium белый, бронзовый',
      description: 'Профессиональный отпариватель для одежды с мощной подачей пара. Быстро разглаживает даже плотные ткани.',
      price: 45990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p84/84404891.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe9/81085669.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pec/81085671.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1f/p81/84404892.jpeg?format=gallery-medium'
      ],
      link: 'http://kaspi.kz/shop/p/otparivatel-aerolith-steam-garment-premium-belyi-bronzovyi-150458532/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 10,
      name: 'Кухонные весы Generic SF-400',
      description: 'Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.',
      price: 699,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 11,
      name: 'Аэрогриль Merlin FD-1017B 16 л черно-серебристый',
      description: 'Аэрогриль FD-1017B — современное решение для приготовления вкусных и полезных блюд с минимальными усилиями. С мощностью 2100 Вт и объёмом 16 литров, этот аэрогриль позволяет готовить для всей семьи, сохраняя при этом все полезные вещества и ароматы.',
      price: 54990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/pde/89142750.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/pda/89142751.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pd7/89142752.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/merlin-fd-1017b-16-l-cherno-serebristyi-150681417/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 12,
      name: 'Электрочайник ZY-303 черный, серебристый',
      description: 'Электрочайник ZY-303 — стильное и функциональное решение для быстрого кипячения воды. Сочетая мощность 1500 Вт и дизайнерский внешний вид, он станет незаменимым помощником на вашей кухне.',
      price: 2900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h84/66556923904030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/p64/110210493.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-zy-303-chernyi-serebristyi-107912987/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 13,
      name: 'Блендер стационарный MONTERO PRO K9 серебристый',
      description: 'Представьте себе помощника, который превращает любые продукты в идеальную текстуру — от нежных смузи до густых соусов. Именно таким станет MONTERO PRO K9.' ,
      price: 27930,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p3e/63083117.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p20/p42/63083118.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p45/63083119.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p90/63083120.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/blender-statsionarnyi-montero-pro-k9-serebristyi-133292706/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 14,
      name: 'Гладильная система Two Hands Up THU-RX229plus черный',
      description: 'Отпариватель RX229 мощная гладильная система для вашего дома, позволит заменить вам утюг, гладильную доску и обычный отпариватель. Все необходимые функции для ухода за одеждой в одном приборе. Вы с легкостью справитесь с большим количеством одежды благодаря удобной и многофункциональной конструкции. Мощность 1950W, длинный шланг и высокое давление пара 3,5 бар. Незаменимый помощник в каждом доме.',
      price: 58800,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p28/40835467.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/p28/40835468.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd7/p28/40835469.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2b/40835470.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/two-hands-up-thu-rx229plus-chernyi-133431972/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 15,
      name: 'Утюг MONTERO KC-3007 черный',
      description: 'Пар идёт равномерно, не плюётся водой. Гладить станет намного легче.',
      price: 24990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p07/109901306.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p04/109901307.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/p00/109901308.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p02/109901309.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/two-hands-up-thu-rx229plus-chernyi-133431972/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 16,
      name: 'Швейная машина NEXME SM-505 белый',
      description: 'Швейная машина NEXME SM-505 белый — надежный и удобный прибор для домашнего шитья, позволяющий создавать разнообразные строчки и полуавтоматические петли. Этот электромеханический аппарат сочетает простоту использования, функциональность и стильный дизайн. ',
      price: 12990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p19/p78/82237803.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf5/pe8/81235644.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6e/p98/77478106.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pa2/77478134.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/nexme-sm-505-belyi-146320053/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 17,
      name: 'Тепловентилятор Leema TP-001 Issai красный',
      description: 'Тепловентилятор Leema TP-001 Issai — эффективный и компактный обогреватель, который обеспечит тепло в вашем доме или офисе. С мощностью 2000 Вт и возможностью обогрева площади до 30 м², он станет вашим надёжным помощником в холодное время года.',
      price: 6985,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/p61/7343741.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p61/7343743.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p61/7343744.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p61/7343745.png?format=gallery-medium'
      ],
      link: 'http://kaspi.kz/shop/p/teploventiljator-leema-tp-001-issai-krasnyi-129755125/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 18,
      name: 'Увлажнитель воздуха Humidifier H2O Humid-300 белый',
      description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.',
      price: 6888,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h79/64156855107614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h4e/64156857008158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/hfc/64156859138078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-humidifier-h2o-humid-300-belyi-102027263/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 19,
      name: 'Масляный радиатор NIKURA НY-C3F-13 белый, серый',
      description: 'Масляный радиатор NIKURA НY-C3F-13 — эффективный и надёжный обогреватель, который обеспечит комфортное тепло в вашем доме. С мощностью 2900 Вт и возможностью обогрева площади до 30 м², он станет отличным решением для холодных зимних дней.',
      price: 29877,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h63/83589611749406.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h63/83589611749406.jpg?format=gallery-medium',

      ],
      link: 'https://kaspi.kz/shop/p/masljanyi-radiator-nikura-ny-c3f-13-belyi-seryi-113171005/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 20,
      name: 'Осушитель воздуха Midea MDDF-20DEN7 белый',
      description: 'Минимальный шум и максимум комфорта. Благодаря оптимизации холодильного контура и системы воздуховодов. Уровень шума снижен до 39 дБ.',
      price: 105900,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/pa3/67629424.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p63/pa3/67629425.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/pa3/67629426.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pa3/67629427.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/midea-mddf-20den7-belyi-106411528/?c=750000000',
      categoryId: 3,
      likes: 0
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

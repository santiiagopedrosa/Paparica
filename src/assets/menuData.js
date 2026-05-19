/**
 * Dados do menu — fácil de editar sem mexer no JSX.
 * Adicione/edite pratos aqui livremente.
 */
export const menuData = {
  pizzas: {
    title: 'Pizzas',
    sub: 'Lentas. Crocantes. Sem disfarces.',
    items: [
      { n: 'Margherita', d: 'Tomate da casa, mozzarella fior di latte, manjericão fresco, azeite virgem', p: '9,50', t: ['clássico'] },
      { n: 'Capricciosa', d: 'Tomate, mozzarella, fiambre, cogumelos, alcachofras, azeitonas pretas', p: '12,50', t: ['popular'], star: true },
      { n: 'Diavola', d: 'Tomate, mozzarella, chouriço picante, malaguetas frescas, orégãos', p: '11,90', t: ['picante'] },
      { n: 'Quattro Formaggi', d: 'Mozzarella, gorgonzola, parmesão, queijo da serra, mel', p: '12,90', t: ['sem tomate'] },
      { n: 'Paparica', d: 'A da casa: tomate, mozzarella, presunto, rúcula, parmesão, vinagrete balsâmico', p: '13,50', t: ['assinatura'], star: true },
      { n: 'Portuguesa', d: 'Tomate, mozzarella, fiambre, ovo cozido, ervilhas, azeitonas', p: '11,50', t: ['tradicional'] },
      { n: 'Vegetariana', d: 'Tomate, mozzarella, courgette, beringela, pimento, cebola caramelizada', p: '11,90', t: ['vegetariana'] },
      { n: 'Tartufata', d: 'Crema di tartufo, mozzarella, cogumelos selvagens, ovo, parmesão', p: '14,50', t: ['assinatura'] },
    ],
  },
  entradas: {
    title: 'Para Começar',
    sub: 'Para abrir o apetite — ou estragar a fome.',
    items: [
      { n: 'Pão de Alho com Queijo', d: 'Pão da casa, alho, manteiga, mozzarella derretida e ervas', p: '5,90', t: ['popular'], star: true },
      { n: 'Bruschetta de Tomate', d: 'Pão tostado, tomate fresco, alho, manjericão, azeite', p: '4,50', t: [] },
      { n: 'Tábua de Enchidos', d: 'Presunto, chouriço, queijo curado, picles, pão tostado', p: '11,90', t: ['partilhar'] },
      { n: 'Burrata com Tomate', d: 'Burrata fresca, tomate cherry, manjericão, pesto de pinhões', p: '9,90', t: [] },
    ],
  },
  massas: {
    title: 'Massas',
    sub: 'Feitas como em casa — só que melhor.',
    items: [
      { n: 'Carbonara', d: 'Spaghetti, bacon, ovo, parmesão, pimenta preta', p: '10,90', t: ['tradicional'] },
      { n: 'Bolonhesa', d: 'Tagliatelle, ragú de vaca cozinhado 4h, parmesão', p: '10,50', t: [] },
      { n: 'Tagliatelle al Tartufo', d: 'Manteiga, parmesão, óleo de trufa, ovo de codorniz', p: '13,50', t: ['assinatura'] },
      { n: 'Pesto Genovese', d: 'Spaghetti, manjericão fresco, pinhões, parmesão, azeite', p: '9,90', t: [] },
    ],
  },
  doces: {
    title: 'Doces',
    sub: 'Para terminar como deve ser.',
    items: [
      { n: 'Cheesecake da Casa', d: 'Bolacha caramelizada, creme suave, frutos vermelhos', p: '4,50', t: ['popular'], star: true },
      { n: 'Brownie com Gelado', d: 'Brownie morno de chocolate negro, gelado de baunilha', p: '4,90', t: ['popular'], star: true },
      { n: 'Tiramisù', d: 'Mascarpone, café expresso, palitos La Reine, cacau', p: '4,50', t: [] },
      { n: 'Gelado Artesanal', d: 'Bolas de gelado da casa — pergunte aos sabores do dia', p: '3,50', t: [] },
    ],
  },
};

export const menuTabs = [
  { key: 'pizzas', label: 'Pizzas' },
  { key: 'entradas', label: 'Entradas' },
  { key: 'massas', label: 'Massas' },
  { key: 'doces', label: 'Doces' },
];

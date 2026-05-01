# 📖 Pokédex App

> A minimalist Pokédex built with React, TanStack Query and PokeAPI. Features paginated listing, client-side search and detailed Pokémon stats.

> React, TanStack Query ve PokeAPI kullanılarak geliştirilmiş minimalist bir Pokédex uygulaması. Sayfalandırılmış listeleme, istemci taraflı arama ve detaylı Pokémon istatistikleri sunar.

---

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=flat-square&logo=reactquery)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=flat-square&logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-v1-5A29E4?style=flat-square&logo=axios)

---

## 🚀 Features / Özellikler

- 🔍 **Real-time search** across all Pokémon / Tüm Pokémon'lar üzerinde **anlık arama**
- 📄 **Paginated listing** with 20 Pokémon per page / Sayfa başına 20 Pokémon ile **sayfalandırılmış listeleme**
- 📊 **Detailed stats** including HP, Attack, Defense and more / HP, Saldırı, Savunma ve daha fazlasını içeren **detaylı istatistikler**
- 🎨 **Type-based color coding** for Pokémon types / Pokémon türleri için **türe göre renk kodlaması**
- ⚡ **Optimized data fetching** with TanStack Query caching / TanStack Query önbelleği ile **optimize edilmiş veri çekme**
- 📱 **Fully responsive** design / Tamamen **duyarlı** tasarım

---

## 🛠️ Tech Stack / Teknoloji Yığını

| Technology            | Purpose / Amaç                                                            |
| --------------------- | ------------------------------------------------------------------------- |
| **React 19**          | UI Framework                                                              |
| **React Router v7**   | Client-side routing / İstemci taraflı yönlendirme                         |
| **TanStack Query v5** | Server state management & caching / Sunucu durum yönetimi ve önbellekleme |
| **Axios**             | HTTP client / HTTP istemcisi                                              |
| **Tailwind CSS v3**   | Utility-first styling / Yardımcı sınıf tabanlı stil                       |
| **PokeAPI**           | Pokémon data source / Pokémon veri kaynağı                                |

---

## 📂 Project Structure / Proje Yapısı

```
src/
├── components/
│   ├── PokemonCard.jsx       # Individual Pokémon card / Tekil kart
│   ├── Pagination.jsx        # Page navigation / Sayfa navigasyonu
│   ├── SearchBar.jsx         # Search input / Arama girişi
│   └── StatusMessage.jsx     # Loading & error states / Yükleme ve hata durumları
├── hooks/
│   ├── usePokemon.js         # Paginated list hook / Sayfalı liste hook'u
│   ├── usePokemonDetail.js   # Detail page hook / Detay sayfası hook'u
│   └── useAllPokemons.js     # Full list for search / Arama için tam liste
├── pages/
│   ├── Home.jsx              # Main listing page / Ana listeleme sayfası
│   └── PokemonDetail.jsx     # Detail page / Detay sayfası
├── services/
│   └── pokemonService.js     # API calls / API çağrıları
└── utils/
    └── getPokemonId.js       # URL to ID parser / URL'den ID çıkarıcı
```

---

## ⚙️ Getting Started / Başlarken

### Prerequisites / Gereksinimler

- Node.js `>=18`
- npm or yarn

### Installation / Kurulum

```bash
# Clone the repository / Repoyu klonla
git clone https://github.com/mertkaya20/pokedex-app.git

# Navigate into the project / Proje dizinine gir
cd pokedex-app

# Install dependencies / Bağımlılıkları yükle
npm install

# Start the development server / Geliştirme sunucusunu başlat
npm run dev
```

---

## 🔄 How It Works / Nasıl Çalışır

**Search Logic / Arama Mantığı**

- When the search bar is empty, the app displays a **paginated list** fetched from the API.
- When the user types, the app switches to **client-side filtering** over the full Pokémon list and hides pagination.

- Arama çubuğu boşken uygulama API'den çekilen **sayfalandırılmış listeyi** gösterir.
- Kullanıcı yazmaya başladığında uygulama tam Pokémon listesi üzerinde **istemci taraflı filtrelemeye** geçer ve sayfalandırmayı gizler.

---

## 📸 Screenshots / Ekran Görüntüleri

> Coming soon / Yakında eklenecek

---

## 👤 Author / Yazar

**Mert Kaya**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/merttkaya20/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/mertkaya20)

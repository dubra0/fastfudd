# Melano: ئامادەکاری بۆ App Store و Google Play

ئەم فۆڵدەرە هەموو ئەوانەی تێدایە کە کاتێک بڕیارت دا پێویستت پێیان دەبێت.

## ئەوەی ئامادەیە

| شت | شوێن |
|---|---|
| ئایکۆنی ئەپ (تا 1024px) | `melano-github/icons/` |
| سیاسەتی تایبەتمەندی | `https://dubra0.github.io/fastfudd/privacy.html` |
| ڕێکخستنی ئەپی کڕیار | `customer-app/` |
| ڕێکخستنی ئەپی گەیەنەر | `driver-app/` |
| دەقی فرۆشگا | خوارەوە |

## پێش بڵاوکردنەوە پێویستە

1. لە `privacy.html` جێگای `[CONTACT_EMAIL]` ئیمەیڵی کار دابنێ.
2. ئەکاونت دروست بکە: Google Play Console و Apple Developer.
3. وێنەی شاشەی ئەپ لە مۆبایل بگرە.
4. `com.melano.food` و `com.melano.driver` بگۆڕە ئەگەر ناوێکی ترت دەوێت. دوای بڵاوکردنەوە ناگۆڕدرێن.

## پێش ناردن بۆ Apple زیاد بکرێت

ئەپێک کە تەنها سایتێکی پێچراو بێت، ڕەنگە ڕەت بکرێتەوە. لەگەڵ Claude ئەمانە زیاد بکە:

- ئاگادارکردنەوەی داواکاری (Push)
- GPS لە پشتەوە بۆ گەیەنەر
- ئەگەر کڕیار هەژماری هەبێت: Sign in with Apple و سڕینەوەی هەژمار لەناو ئەپ

## دروستکردنی ئەپ

پێویستی: Node.js. بۆ Android: Android Studio. بۆ iOS: Mac لەگەڵ Xcode، یان خزمەتگوزاری ئۆنلاین.

لەناو `customer-app`، و پاشان `driver-app`:

```bash
npm install
```

```bash
npx cap add android
```

```bash
npx cap add ios
```

```bash
npx cap open android
```

ئەم ڕێکخستنانە هێشتا تاقی نەکراونەتەوە، چونکە Node.js لەسەر ئەم کۆمپیوتەرە نییە.

## دەقی فرۆشگا

**ناو:** Melano Fast Food

**کورتە:** خواردنی دڵخوازت داوا بکە و گەیاندنەکەی لەسەر نەخشە ببینە.

**وەسف:**
مینیوی Melano ببینە، قەبارە و زیادەکان هەڵبژێرە، تێبینی بنووسە و داواکارییەکەت بنێرە. گەیەنەرەکەت بە زیندوویی لەسەر نەخشە ببینە و بزانە کەی دەگات. هەموو داواکارییەکانت لە یەک شوێن دەمێننەوە.

**English short:** Order your favorite food and follow the delivery live on a map.

**English description:**
Browse the Melano menu, choose sizes and extras, add a note, and place your order. Follow your driver live on the map and see when your food will arrive. All your orders stay in one place.

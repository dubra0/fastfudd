// زمانەکانی پەڕەی کڕیار: کوردی بنەڕەتە؛ عەرەبی و ئینگلیزی لێرە وەردەگێڕدرێن.
// ناوی خواردن و بەش لە مینیوی چێشتخانەوە دێن و وەک خۆیان دەمێننەوە.
(function(){
  const D = [
    ["هەژمارەکەت بە تەواوی دەسڕدرێتەوە و ناگەڕێتەوە، و ناتوانیت جارێکی تر بەم ئیمەیڵە هەژمار دروست بکەیتەوە. دڵنیایت؟","Your account will be permanently deleted and cannot be restored, and this email cannot be used for a new account. Are you sure?","سيتم حذف حسابك نهائيًا ولا يمكن استعادته، ولا يمكن استخدام هذا البريد لحساب جديد. هل أنت متأكد؟"],
    ["🔴 ئێستا داخراوین · دەتوانیت مینیو ببینیت، بەڵام ناتوانیت داواکاری بنێریت","🔴 We are closed now · You can view the menu but cannot order","🔴 مغلق الآن · يمكنك مشاهدة القائمة لكن لا يمكنك الطلب"],
    ["بچۆ ژوورەوە بۆ ئەوەی داواکارییەکانت لەسەر هەر مۆبایلێک ببینیت. بێ هەژماریش دەتوانیت داواکاری بنێریت.","Log in to see your orders on any phone.","سجّل الدخول لمشاهدة طلباتك على أي هاتف."],
    ["لە iPhone: Settings › Privacy & Security › Location Services هەڵبکە و Safari Websites بکە While Using the App، پاشان پەڕەکە Refresh بکە.","On iPhone: turn on Settings › Privacy & Security › Location Services, set Safari Websites to While Using the App, then refresh this page.","في iPhone: فعّل Settings › Privacy & Security › Location Services واجعل Safari Websites على While Using the App ثم حدّث الصفحة."],
    ["لۆکەیشن نەدۆزرایەوە. GPS هەڵبکە و دووبارە هەوڵ بدەرەوە، یان لەسەر نەخشە دیاری بکە.","Location not found. Turn on GPS and try again, or set it on the map.","لم يتم العثور على الموقع. شغّل GPS وحاول مجددًا أو حدده على الخريطة."],
    ["لە ڕێکخستنی مۆبایل ڕێگە بە Location بدە و GPS هەڵبکە، پاشان دووبارە هەوڵ بدەرەوە.","Allow Location in your phone settings and turn on GPS, then try again.","اسمح بالموقع من إعدادات الهاتف وشغّل GPS ثم حاول مجددًا."],
    ["بۆ ئەوەی گەیەنەر بگاتە دەرگای ماڵەکەت و نرخی گەیاندن بزانیت، لۆکەیشن چالاک بکە.","Turn on location so the driver can reach your door and you can see the delivery price.","فعّل الموقع ليصل السائق إلى بابك وتعرف سعر التوصيل."],
    ["هەندێک لە خواردنەکان ئێستا نەماون. مینیو نوێ کرایەوە، تکایە سەبەتەکەت بپشکنە.","Some items are no longer available. The menu was updated, please check your cart.","بعض الأصناف لم تعد متوفرة. تم تحديث القائمة، يرجى مراجعة السلة."],
    ["ئەگەر ئەم ئیمەیڵە هەژماری هەبێت، لینکێکی بۆ دەنێردرێت. سەیری Inbox و Spam بکە.","If this email has an account, a link will be sent. Check Inbox and Spam.","إذا كان لهذا البريد حساب فسيصله رابط. تحقق من الوارد والبريد العشوائي."],
    ["لینکێکی پشتڕاستکردنەوەمان بۆ ئیمەیڵەکەت نارد. سەیری Inbox و Spam بکە.","We sent a confirmation link to your email. Check Inbox and Spam.","أرسلنا رابط تأكيد إلى بريدك. تحقق من الوارد والبريد العشوائي."],
    ["ناردنی ئیمەیڵ هێشتا ڕێک نەخراوە. تکایە پەیوەندی بە چێشتخانە بکە.","Email sending is not set up yet. Please contact the restaurant.","إرسال البريد غير مهيأ بعد. يرجى التواصل مع المطعم."],
    ["سەرەتا ئیمەیڵەکەت پشتڕاست بکەرەوە. سەیری Inbox و Spam بکە.","Please confirm your email first. Check Inbox and Spam.","يرجى تأكيد بريدك أولًا. تحقق من الوارد والبريد العشوائي."],
    ["ئەم پەڕەیە لەناو ئەپێکدا کراوەتەوە. لینکەکە لە Safari یان Chrome بکەرەوە.","This page opened inside another app. Open the link in Safari or Chrome.","فُتحت هذه الصفحة داخل تطبيق آخر. افتح الرابط في Safari أو Chrome."],
    ["تکایە شوێنی ماڵەکەت دیاری بکە بۆ ئەوەی گەیەنەر بیدۆزێتەوە.","Please set your home location so the driver can find you.","يرجى تحديد موقع منزلك ليجدك السائق."],
    ["🕐 داواکارییەکەت گەیشت · چاوەڕێی گەیەنەر...","🕐 Order received · Waiting for a driver...","🕐 تم استلام طلبك · بانتظار السائق..."],
    ["داواکاری زۆرت ناردووە. تکایە چەند خولەکێکی تر هەوڵ بدەرەوە.","Too many orders. Please try again in a few minutes.","طلبات كثيرة. يرجى المحاولة بعد دقائق."],
    ["هەوڵی زۆر درا. تکایە چەند خولەکێکی تر هەوڵ بدەرەوە.","Too many attempts. Please try again in a few minutes.","محاولات كثيرة. يرجى المحاولة بعد دقائق."],
    ["زۆر هەوڵ درا. تکایە چەند خولەکێکی تر هەوڵ بدەرەوە.","Too many attempts. Please try again in a few minutes.","محاولات كثيرة. يرجى المحاولة بعد دقائق."],
    ["نەنێردرا. ئینتەرنێت بپشکنە و دووبارە هەوڵ بدەرەوە.","Not sent. Check your internet and try again.","لم يُرسل. تحقق من الإنترنت وحاول مجددًا."],
    ["نەکرا. ئینتەرنێت بپشکنە و دووبارە هەوڵ بدەرەوە.","Failed. Check your internet and try again.","تعذر ذلك. تحقق من الإنترنت وحاول مجددًا."],
    ["ڕێگە بە Location بدە لە ڕێکخستنی وێبگەڕ و GPS هەڵبکە.","Allow Location in your browser settings and turn on GPS.","اسمح بالموقع من إعدادات المتصفح وشغّل GPS."],
    ["چوونەژوورەوە بە Google بەم زووانە چالاک دەبێت.","Google sign-in is coming soon.","تسجيل الدخول عبر Google قريبًا."],
    ["چوونەژوورەوە بە مۆبایل بەم زووانە چالاک دەبێت.","Mobile sign-in is coming soon.","تسجيل الدخول بالهاتف قريبًا."],
    ["تکایە پەیوەندی بە چێشتخانە بکە بۆ گۆڕینی پاسوۆرد.","Please contact the restaurant to change your password.","يرجى التواصل مع المطعم لتغيير كلمة المرور."],
    ["نەتوانرا مینیو بهێنرێت. ئینتەرنێت بپشکنە.","Could not load the menu. Check your internet.","تعذر تحميل القائمة. تحقق من الإنترنت."],
    ["🗺️ نەخشەکە نزیک بکەرەوە و لەسەر ماڵەکەت کلیک بکە","🗺️ Zoom in and tap your home on the map","🗺️ قرّب الخريطة واضغط على منزلك"],
    ["· 🛰️ دابگرە و 🏠 ڕابکێشە سەر دەرگای ماڵەکەت","· Tap 🛰️ and drag 🏠 to your door","· اضغط 🛰️ واسحب 🏠 إلى بابك"],
    [". تکایە 🏠 لەسەر نەخشە ڕابکێشە سەر دەرگای ماڵەکەت.",". Please drag 🏠 on the map to your door.",". يرجى سحب 🏠 على الخريطة إلى بابك."],
    ["ناردنی کۆد","Send code","إرسال الرمز"],
    ["🔥 گەیەنەر زۆر نزیکە، ئامادە بە!","🔥 The driver is very close, get ready!","🔥 السائق قريب جدًا، استعد!"],
    ["❌ ببورە، داواکارییەکەت هەڵوەشێنرایەوە.","❌ Sorry, your order was cancelled.","❌ عذرًا، تم إلغاء طلبك."],
    ["⚠️ سیگناڵی گەیەنەر لاوازە · دوایین شوێن","⚠️ Weak driver signal · Last location","⚠️ إشارة السائق ضعيفة · آخر موقع"],
    ["ببورە، ئەم شوێنە لە ناوچەکانی گەیاندن نییە.","Sorry, this location is outside our delivery areas.","عذرًا، هذا الموقع خارج مناطق التوصيل."],
    ["⚠️ ئەم شوێنە لە ناوچەکانی گەیاندن نییە.","⚠️ This location is outside our delivery areas.","⚠️ هذا الموقع خارج مناطق التوصيل."],
    ["تۆمارکردنی هەژماری نوێ ئێستا داخراوە.","New sign-ups are closed for now.","التسجيل الجديد مغلق حاليًا."],
    ["یان لەسەر نەخشە ماڵەکەت دیاری بکە 👇","or set your home on the map 👇","أو حدد منزلك على الخريطة 👇"],
    ["هەر داواکارییەکی تایبەتت هەیە لێرە بنووسە...","Write any special request here...","اكتب أي طلب خاص هنا..."],
    ["پاسوۆرد لاوازە. پیت و ژمارە تێکەڵ بکە.","Weak password. Mix letters and numbers.","كلمة المرور ضعيفة. استخدم حروفًا وأرقامًا."],
    ["ئەم ئیمەیڵە پێشتر تۆمار کراوە. بچۆ ژوورەوە.","This email is already registered. Please log in.","هذا البريد مسجل مسبقًا. سجّل الدخول."],
    ["لەسەر نەخشە لەسەر ماڵەکەت کلیک بکە.","Tap your home on the map.","اضغط على منزلك في الخريطة."],
    ["تکایە ناو، ژمارە و ناونیشان بنووسە.","Please enter your name, phone and address.","يرجى إدخال الاسم والهاتف والعنوان."],
    ["پاسوۆرد دەبێت لانیکەم ٨ پیت بێت.","Password must be at least 8 characters.","يجب أن تكون كلمة المرور 8 أحرف على الأقل."],
    ["ئیمەیڵ یان پاسوۆرد هەڵەیە.","Wrong email or password.","البريد أو كلمة المرور غير صحيحة."],
    ["کۆد هەڵەیە یان بەسەرچووە.","The code is wrong or expired.","الرمز غير صحيح أو منتهي."],
    ["وردی شوێنەکەت کەمە","Your location accuracy is low","دقة موقعك منخفضة"],
    ["✓ شوێنی ماڵەکەت بە دەست دیاری کرا","✓ Your home was set by hand","✓ تم تحديد منزلك يدويًا"],
    ["📲 بۆ دامەزراندن وەک ئەپ: لە Safari دوگمەی","📲 To install as an app: in Safari tap","📲 للتثبيت كتطبيق: في Safari اضغط"],
    ["📡 شوێنی ورد دەدۆزرێتەوە…","📡 Finding your exact location…","📡 جارٍ تحديد موقعك بدقة…"],
    ["📡 لۆکەیشن دەدۆزرێتەوە…","📡 Finding location…","📡 جارٍ تحديد الموقع…"],
    ["📍 چاوەڕێی شوێنی گەیەنەر…","📍 Waiting for the driver's location…","📍 بانتظار موقع السائق…"],
    ["✅ گەیەنرا! نۆشی گیان 🍔","✅ Delivered! Enjoy your meal 🍔","✅ تم التوصيل! بالهناء والشفاء 🍔"],
    ["چوونەژوورەوە بە Google نەکرا:","Google sign-in failed:","فشل تسجيل الدخول عبر Google:"],
    ["چوونەژوورەوە بە Google","Continue with Google","المتابعة عبر Google"],
    ["✉️ چوونەژوورەوە بە ئیمەیڵ","✉️ Log in with email","✉️ الدخول بالبريد"],
    ["گەڕەک، کۆڵان، نیشانەی ماڵ...","Neighbourhood, street, landmark...","الحي، الشارع، علامة قريبة..."],
    ["بۆ نموونە: بێ پیاز، سۆسی زیاتر","e.g. no onion, extra sauce","مثال: بدون بصل، صوص إضافي"],
    ["🔄 دووبارە وەرگرتنی شوێن","🔄 Get location again","🔄 تحديد الموقع مجددًا"],
    ["📲 Melano وەک ئەپ دابمەزرێنە","📲 Install Melano as an app","📲 ثبّت Melano كتطبيق"],
    ["💵 نرخی گەیاندن بەپێی ناوچە","💵 Delivery price by area","💵 سعر التوصيل حسب المنطقة"],
    ["🎁 گەیاندنی بێبەرامبەر","🎁 Free delivery","🎁 توصيل مجاني"],
    ["📍 شوێنی ئێستام بنێرە","📍 Send my current location","📍 أرسل موقعي الحالي"],
    ["🗺️ لەسەر نەخشە دیاری بکە","🗺️ Set on map","🗺️ حدد على الخريطة"],
    ["📍 چالاککردنی لۆکەیشن","📍 Turn on location","📍 تفعيل الموقع"],
    ["📲 پەیوەندی بە واتسئەپ","📲 Contact on WhatsApp","📲 تواصل عبر واتساب"],
    ["🛵 بەدواداچوونی داواکاری","🛵 Tracking order","🛵 تتبع الطلب"],
    ["📝 تێبینی بۆ چێشتخانە","📝 Note for the restaurant","📝 ملاحظة للمطعم"],
    ["ناونیشانی گەیاندن","Delivery address","عنوان التوصيل"],
    ["دوای دیاریکردنی شوێن","After setting location","بعد تحديد الموقع"],
    ["مینیو هێشتا ئامادە نییە.","The menu is not ready yet.","القائمة غير جاهزة بعد."],
    ["هێشتا داواکاریت نییە 🍔","You have no orders yet 🍔","لا توجد طلبات بعد 🍔"],
    ["سەبەتەکەت بەتاڵە 🛒","Your cart is empty 🛒","سلتك فارغة 🛒"],
    ["تکایە سەرەتا بچۆ ژوورەوە.","Please log in first.","يرجى تسجيل الدخول أولًا."],
    ["تکایە شوێنی ماڵەکەت دیاری بکە.","Please set your home location.","يرجى تحديد موقع منزلك."],
    ["ژمارەی مۆبایل دروست نییە.","Invalid phone number.","رقم الهاتف غير صحيح."],
    ["کۆدی 6 ژمارەیی بنووسە.","Enter the 6-digit code.","أدخل الرمز المكون من 6 أرقام."],
    ["ئیمەیڵەکە دروست نییە.","Invalid email.","البريد غير صحيح."],
    ["پاسوۆردی نوێ دەبێت جیاواز بێت.","The new password must be different.","يجب أن تكون كلمة المرور الجديدة مختلفة."],
    ["نەنێردرا. دووبارە هەوڵ بدەرەوە.","Not sent. Please try again.","لم يُرسل. حاول مجددًا."],
    ["نەکرا. دووبارە هەوڵ بدەرەوە.","Failed. Please try again.","تعذر ذلك. حاول مجددًا."],
    ["ببورە، ئێستا داخراوین.","Sorry, we are closed now.","عذرًا، نحن مغلقون الآن."],
    ["🔴 ئێستا داخراوین","🔴 Closed now","🔴 مغلق الآن"],
    ["⚠️ ڕێگە بە شوێن نەدراوە.","⚠️ Location permission denied.","⚠️ تم رفض إذن الموقع."],
    ["⚠️ شوێن نەدۆزرایەوە.","⚠️ Location not found.","⚠️ لم يتم العثور على الموقع."],
    ["✓ شوێنەکەت وەرگیرا","✓ Location received","✓ تم تحديد الموقع"],
    ["⏳ مینیو بار دەکرێت…","⏳ Loading menu…","⏳ جارٍ تحميل القائمة…"],
    ["هەژمارەکەت سڕایەوە.","Your account was deleted.","تم حذف حسابك."],
    ["پاسوۆردت لەبیر چووە؟","Forgot password?","نسيت كلمة المرور؟"],
    ["سەرەتا مینیو ببینە","View the menu first","شاهد القائمة أولًا"],
    ["دووبارە هەوڵ بدەرەوە","Try again","حاول مجددًا"],
    ["هەژمار دروست بکە","Sign up","إنشاء حساب"],
    ["دروستکردنی هەژمار","Create account","إنشاء الحساب"],
    ["لەبیرچوونی پاسوۆرد","Forgot password","نسيت كلمة المرور"],
    ["سڕینەوەی هەژمار","Delete account","حذف الحساب"],
    ["سیاسەتی تایبەتمەندی","Privacy policy","سياسة الخصوصية"],
    ["لۆکەیشن پێویستە","Location is required","الموقع مطلوب"],
    ["پیشاندانی پاسوۆرد","Show password","إظهار كلمة المرور"],
    ["تێبینی بۆ ئەم خواردنە","Note for this item","ملاحظة لهذا الصنف"],
    ["🛵 گەیەنەرەکەت","🛵 Your driver","🛵 سائقك"],
    ["لە ڕێگایە بۆ لای تۆ!","On the way to you!","في الطريق إليك!"],
    ["🛵 لە ڕێگایە","🛵 On the way","🛵 في الطريق"],
    ["گەیەنەر وەریگرت","Driver accepted","قبل السائق"],
    ["📦 داواکارییەکانم","📦 My orders","📦 طلباتي"],
    ["🛒 سەبەتەکەت","🛒 Your cart","🛒 سلتك"],
    ["❌ هەڵوەشێنرا","❌ Cancelled","❌ أُلغي"],
    ["✅ گەیەنرا","✅ Delivered","✅ تم التوصيل"],
    ["🕐 چاوەڕوان","🕐 Waiting","🕐 قيد الانتظار"],
    ["🟢 کراوەیە","🟢 Open","🟢 مفتوح"],
    ["🔴 داخراوە","🔴 Closed","🔴 مغلق"],
    ["⚠️ وردی کەمە","⚠️ Low accuracy","⚠️ دقة منخفضة"],
    ["📝 تێبینی:","📝 Note:","📝 ملاحظة:"],
    ["● زیندوو · نوێکرایەوە","● Live · Updated","● مباشر · تم التحديث"],
    ["📡 وردی ئێستا","📡 Current accuracy","📡 الدقة الحالية"],
    ["م… لە شوێنی خۆت بوەستە","m… stay where you are","م… ابقَ في مكانك"],
    ["چرکە لەمەوبەر","seconds ago","ثانية مضت"],
    ["کاتی گەیشتن","Arrival","الوصول"],
    ["ناردنی داواکاری","Place order","إرسال الطلب"],
    ["چاوەڕێ بکە…","Please wait…","يرجى الانتظار…"],
    ["ناردنی لینک","Send link","إرسال الرابط"],
    ["پاسوۆرد گۆڕدرا ✓","Password changed ✓","تم تغيير كلمة المرور ✓"],
    ["پاسوۆرد بنووسە.","Enter your password.","أدخل كلمة المرور."],
    ["پاسوۆردی نوێ","New password","كلمة مرور جديدة"],
    ["لەبیرم بێت","Remember me","تذكرني"],
    ["هەژمارت هەیە؟","Have an account?","لديك حساب؟"],
    ["ئەندام نیت؟","Not a member yet?","لست عضوًا؟"],
    ["هەژماری نوێ","New account","حساب جديد"],
    ["ژمارەی مۆبایل","Mobile number","رقم الهاتف"],
    ["ناوی تەواو","Full name","الاسم الكامل"],
    ["شوێنی ماڵەکەت","Your home location","موقع منزلك"],
    ["هەژمارەکەم","My account","حسابي"],
    ["داواکارییەکانم","My orders","طلباتي"],
    ["داواکارییەکەت","Your order","طلبك"],
    ["کۆی گشتی","Total","الإجمالي"],
    ["گەڕانەوە","Back","رجوع"],
    ["ناوەندکردن","Center","توسيط"],
    ["پاشەکەوتکردن","Save","حفظ"],
    ["چوونەژوورەوە","Log in","تسجيل الدخول"],
    ["بچۆ ژوورەوە","Log in","سجّل الدخول"],
    ["دەرەوەی ناوچەکان","Outside delivery areas","خارج المناطق"],
    ["ئارەزوومەندانە","optional","اختياري"],
    ["وێنەی ئاسمانی","Satellite view","صورة جوية"],
    ["بێبەرامبەر 🎁","Free 🎁","مجاني 🎁"],
    ["بێبەرامبەر","Free","مجاني"],
    ["زیادکردن","Add","إضافة"],
    ["کەمکردن","Remove","إنقاص"],
    ["مەرجەکان","Terms","الشروط"],
    ["دەرچوون","Log out","خروج"],
    ["داخستن","Close","إغلاق"],
    ["هەمووی","All","الكل"],
    ["سەبەتە","Cart","السلة"],
    ["ئیمەیڵ","Email","البريد"],
    ["پاسوۆرد","Password","كلمة المرور"],
    ["مینیو","Menu","القائمة"],
    ["گەیاندن","Delivery","التوصيل"],
    ["خواردن","Food","الطعام"],
    ["قەبارە","Size","الحجم"],
    ["زیادە","Extras","إضافات"],
    ["ناوت","Your name","اسمك"],
    ["کۆد","Code","الرمز"],
    ["تەواو","Done","تم"],
    ["یان","or","أو"],
    ["د.ع","IQD","د.ع"],
    ["⚠️ لە دەرەوەی ناوچەکانی گەیاندنیت","⚠️ You are outside our delivery areas","⚠️ أنت خارج مناطق التوصيل"],
    ["تا داواکارییەکەت تەواو نەبێت، ناتوانیت هەژمارەکەت بسڕیتەوە.","You cannot delete your account until your order is finished.","لا يمكنك حذف حسابك حتى يكتمل طلبك."],
    ["داواکارییەکە تەواو بووە، نامە نانێردرێت.","This order is finished, messages cannot be sent.","انتهى الطلب، لا يمكن إرسال الرسائل."],
    ["📞 پەیوەندی بە گەیەنەر","📞 Call driver","📞 اتصل بالسائق"],
    ["💬 چات لەگەڵ گەیەنەر","💬 Chat with driver","💬 الدردشة مع السائق"],
    ["✏️ دەستکاری پرۆفایل","✏️ Edit profile","✏️ تعديل الملف"],
    ["نامەکەت بنووسە…","Write a message…","اكتب رسالة…"],
    ["هێشتا نامە نییە.","No messages yet.","لا توجد رسائل بعد."],
    ["💬 چات","💬 Chat","💬 دردشة"],
    ["ناردن","Send","إرسال"],
    ["🌐 زمان","🌐 Language","🌐 اللغة"],
    ["📱 ژمارەی مۆبایل","📱 Mobile number","📱 رقم الهاتف"],
    ["🎂 ڕێکەوتی لەدایکبوون","🎂 Date of birth","🎂 تاريخ الميلاد"],
    ["👤 ڕەگەز","👤 Gender","👤 الجنس"],
    ["بڕی داواکارییەکەت بۆ ئەم کۆدە کەمە.","Your order is too small for this code.","طلبك أقل من الحد الأدنى لهذا الرمز."],
    ["پێشتر ئەم کۆدەت بەکارهێناوە.","You have already used this code.","لقد استخدمت هذا الرمز من قبل."],
    ["ئەم کۆدە بۆ داواکاری","This code is for orders of","هذا الرمز للطلبات بقيمة"],
    ["بەرەو سەرە.","or more.","أو أكثر."],
    ["ئەم کۆدە دروست نییە.","This code is not valid.","هذا الرمز غير صالح."],
    ["ئەم کۆدە بەسەرچووە.","This code has expired.","انتهت صلاحية هذا الرمز."],
    ["ئەم کۆدە تەواو بووە.","This code has been used up.","نفدت استخدامات هذا الرمز."],
    ["کۆدەکە بەکارهێنرا ✓","Code applied ✓","تم تطبيق الرمز ✓"],
    ["🎟️ داشکاندن","🎟️ Discount","🎟️ خصم"],
    ["کۆدی داشکاندن","Discount code","رمز الخصم"],
    ["بەکارهێنان","Apply","تطبيق"],
    ["لابردن","Remove","إزالة"],
    ["⏱️ نزیکەی","⏱️ About","⏱️ حوالي"],
    ["خولەک","min","دقيقة"],
    ["🔔 ئاگادارم بکەرەوە کاتێک داواکارییەکەم دێت","🔔 Notify me when my order is coming","🔔 أعلمني عندما يصل طلبي"],
    ["✓ ئاگادارکردنەوە چالاک کرا","✓ Notifications turned on","✓ تم تفعيل الإشعارات"],
    ["ئاگادارکردنەوە ڕێگەی پێ نەدرا","Notifications not allowed","لم يُسمح بالإشعارات"],
    ["🔔 ئاگادارکردنەوەکان","🔔 Notifications","🔔 الإشعارات"],
    ["✓ چالاکە","✓ On","✓ مفعّلة"],
    ["چالاککردن","Turn on","تفعيل"],
    ["ڕێگەت پێ نەداوە. لە ڕێکخستنی مۆبایل › Notifications ڕێگەی پێ بدە.","Not allowed. Enable it in your phone Settings › Notifications.","غير مسموح. فعّلها من إعدادات الهاتف › الإشعارات."],
    ["بۆ ئاگادارکردنەوە لە iPhone: لە Safari دوگمەی Share › Add to Home Screen بکە و ئەپەکە لەوێوە بکەرەوە.","For notifications on iPhone: in Safari tap Share › Add to Home Screen, then open the app from there.","للإشعارات على iPhone: في Safari اضغط مشاركة › إضافة إلى الشاشة الرئيسية، ثم افتح التطبيق من هناك."],
    ["لەمەوبەر","ago","مضت"],
    ["لە ڕێگایە","On the way","في الطريق"],
    // پرۆفایل
    ["تکایە هەموو خانەکان پڕ بکەرەوە.","Please fill in all fields.","يرجى ملء جميع الحقول."],
    ["تکایە ناوەکەت بنووسە.","Please enter your name.","يرجى كتابة اسمك."],
    ["ئەم ئیمەیڵە هەژمارێکی سڕاوەی هەبووە و ناتوانرێت هەژماری نوێی پێ دروست بکرێت.","This email belonged to a deleted account and cannot be used for a new account.","هذا البريد كان لحساب محذوف ولا يمكن إنشاء حساب جديد به."],
    ["زانیاری کەسی","Personal info","المعلومات الشخصية"],
    ["ڕێکخستن","Settings","الإعدادات"],
    ["یارمەتی","Help","المساعدة"],
    ["کۆی داواکاری","Orders","الطلبات"],
    ["کۆی خەرجی (د.ع)","Spent (IQD)","المصروف (د.ع)"],
    ["زمان","Language","اللغة"],
    ["پەیوەندی بە واتسئەپ","Contact on WhatsApp","تواصل عبر واتساب"],
    ["ئاگادارکردنەوەکان","Notifications","الإشعارات"],
    ["پرۆفایلەکەت تەواو بکە","Complete your profile","أكمل ملفك الشخصي"],
    ["ڕێکەوتی لەدایکبوون","Date of birth","تاريخ الميلاد"],
    ["پرۆفایل","Profile","الملف الشخصي"],
    ["ڕەگەز","Gender","الجنس"],
    ["کوڕ","Male","ذكر"],
    ["کچ","Female","أنثى"],
    // چوونەژوورەوە بە WhatsApp
    ["چوونەژوورەوە بە WhatsApp","Continue with WhatsApp","المتابعة عبر واتساب"],
    ["گۆڕینی ژمارە","Change number","تغيير الرقم"],
    ["چۆن بەردەوام دەبیت؟","How do you want to continue?","كيف تريد المتابعة؟"],
    ["ئەم ژمارەیە لە Melano دەسەڵاتی تایبەتی هەیە. دواتر دەتوانیت لە پرۆفایلەوە بیگۆڕیت.","This number has staff access at Melano. You can switch later from your profile.","لهذا الرقم صلاحيات خاصة في Melano. يمكنك التبديل لاحقًا من الملف الشخصي."],
    ["پانێڵی چێشتخانە","Restaurant panel","لوحة المطعم"],
    ["پانێڵی شۆفێر","Driver panel","لوحة السائق"],
    ["وەک کڕیار، داواکردنی خواردن","As a customer, order food","كزبون، اطلب الطعام"],
    ["کار","Work","العمل"],
    ["بەخێربێیت 👋","Welcome 👋","أهلاً بك 👋"],
    ["بۆ داواکردنی خواردن، بە یەکێک لەم ڕێگایانە بچۆ ژوورەوە","Sign in with one of these options to order food","سجّل الدخول بإحدى هذه الطرق لطلب الطعام"],
    ["چوونەژوورەوە بە ئیمەیڵ","Continue with email","المتابعة بالبريد الإلكتروني"],
    ["🔒 ئەم ژمارەیە بە WhatsApp پشتڕاست کراوەتەوە و ناگۆڕدرێت.","🔒 This number was verified with WhatsApp and can't be changed.","🔒 تم التحقق من هذا الرقم عبر واتساب ولا يمكن تغييره."],
    ["🔒 ژمارەی هەژمارەکەتە و ناگۆڕدرێت.","🔒 This is your account number and can't be changed.","🔒 هذا رقم حسابك ولا يمكن تغييره."],
    ["تکایە سەرەتا پرۆفایلەکەت تەواو بکە.","Please complete your profile first.","يرجى إكمال ملفك الشخصي أولًا."],
    ["گۆڕینی وێنەی پرۆفایل","Change profile photo","تغيير صورة الملف الشخصي"],
    ["وێنە بار نەکرا. ئینتەرنێت بپشکنە و دووبارە هەوڵ بدەرەوە.","Photo upload failed. Check your internet and try again.","فشل رفع الصورة. تحقق من الإنترنت وحاول مرة أخرى."],
    ["ئەم وێنەیە ناخوێنرێتەوە، وێنەیەکی تر هەڵبژێرە.","This image can't be read. Choose another one.","لا يمكن قراءة هذه الصورة، اختر صورة أخرى."],
    ["بەخێربێیت!","Welcome!","أهلاً بك!"],
    ["کۆدێکی ٦ ژمارەیی لە WhatsApp بۆت دێت. ئەگەر WhatsAppـت نییە، بە SMS دێت.","You will get a 6-digit code on WhatsApp. If you don't have WhatsApp, it comes by SMS.","سيصلك رمز من 6 أرقام عبر واتساب. إذا لم يكن لديك واتساب، فسيصل برسالة SMS."],
    ["کۆدمان بۆ","We sent a code to","أرسلنا رمزًا إلى"],
    ["نارد. سەیری WhatsApp بکە","Check WhatsApp","تحقق من واتساب"],
    ["ناردنەوەی کۆد","Resend code","إعادة إرسال الرمز"],
    ["کۆدێکی نوێمان نارد ✓","New code sent ✓","تم إرسال رمز جديد ✓"],
    ["کۆد نەنێردرا. ژمارەکە بپشکنە و دووبارە هەوڵ بدەرەوە.","Code not sent. Check the number and try again.","لم يُرسل الرمز. تحقق من الرقم وحاول مرة أخرى."],
    ["کۆد هەڵەیە یان بەسەرچووە.","Wrong or expired code.","الرمز خاطئ أو منتهي الصلاحية."],
    ["زۆر هەوڵ درا. تکایە چەند خولەکێکی تر هەوڵ بدەرەوە.","Too many attempts. Please try again in a few minutes.","محاولات كثيرة. حاول مرة أخرى بعد بضع دقائق."]
  ].sort((a,b)=>b[0].length-a[0].length);

  // ناوی خواردن و بەشەکان وەرناگێڕدرێن
  const SKIP = ".item h3,.item .desc,.sec-h,.cat:not([data-c=all]),.crow .n b,#shopName,#shopTag,#acct b,#acct small,.lang,.notr";
  let lang = "ku"; try{ lang = localStorage.getItem("mln_lang") || "ku"; }catch(e){}
  const col = () => lang === "en" ? 1 : 2;
  function tr(s){
    if(lang === "ku" || !s) return s;
    let out = String(s);
    // وشەی کورت تەنها وەک خۆی وەردەگێڕدرێت، نەک لەناو وشەیەکی تر
    for(const r of D){
      if(r[0].length > 4){ if(out.includes(r[0])) out = out.split(r[0]).join(r[col()]); }
      else if(out.trim() === r[0]) out = out.replace(r[0], r[col()]);
    }
    return out.replace(/ د\.ع/g, lang === "en" ? " IQD" : " د.ع");
  }
  const orig = new WeakMap();
  function fixText(n){
    const p = n.parentElement; if(!p || p.closest("script,style") || p.closest(SKIP)) return;
    const base = orig.has(n) && orig.get(n).out === n.nodeValue ? orig.get(n).ku : n.nodeValue;
    if(!/[؀-ۿ]/.test(base)) return;
    const out = tr(base);
    if(out !== n.nodeValue) n.nodeValue = out;
    orig.set(n, {ku: base, out});
  }
  function fixAttrs(el){
    ["placeholder","aria-label"].forEach(a=>{
      if(!el.hasAttribute(a)) return;
      const k = "data-ku-" + a, cur = el.getAttribute(a);
      let base = el.getAttribute(k);
      if(base === null || (cur !== tr(base) && cur !== base)){ base = cur; el.setAttribute(k, base); }
      const out = tr(base); if(out !== cur) el.setAttribute(a, out);
    });
  }
  function walk(root){
    if(root.nodeType === 3){ fixText(root); return; }
    if(root.nodeType !== 1) return;
    fixAttrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n; while((n = w.nextNode())) fixText(n);
    root.querySelectorAll("[placeholder],[aria-label]").forEach(fixAttrs);
  }
  let obs = null;
  function apply(){
    if(obs) obs.disconnect();
    document.documentElement.lang = lang === "ku" ? "ckb" : lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    walk(document.body);
    document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang === lang));
    if(obs) obs.observe(document.body, {childList:true, subtree:true, characterData:true});
  }
  window.t = tr;
  window.setLang = v => { lang = v; try{ localStorage.setItem("mln_lang", v); }catch(e){} apply(); };
  const a0 = window.alert.bind(window), c0 = window.confirm.bind(window);
  window.alert = m => a0(tr(m));
  window.confirm = m => c0(tr(m));
  document.addEventListener("DOMContentLoaded", ()=>{
    obs = new MutationObserver(ms=>{
      obs.disconnect();
      ms.forEach(m=>{ if(m.type === "characterData") fixText(m.target); else m.addedNodes.forEach(walk); });
      obs.observe(document.body, {childList:true, subtree:true, characterData:true});
    });
    apply();
    document.addEventListener("click", e=>{ const b = e.target.closest("[data-lang]"); if(b) window.setLang(b.dataset.lang); });
  });
})();

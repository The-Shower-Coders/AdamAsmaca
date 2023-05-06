const ihtimaller = [
    { kategori: 'Film', isim: 'how i met your mother' },
    { kategori: 'Film', isim: 'star wars' },
    { kategori: 'Film', isim: 'forrest gump' },
    { kategori: 'Film', isim: 'the godfather' },
    { kategori: 'Film', isim: 'the shawshank redemption' },
    { kategori: 'Film', isim: 'the dark knight' },
    { kategori: 'Film', isim: 'pulp fiction' },
    { kategori: 'Film', isim: 'the matrix' },
    { kategori: 'Film', isim: 'the lord of the rings the fellowship of the ring' },
    { kategori: 'Film', isim: 'inception' },
    { kategori: 'Film', isim: 'fight club' },
    { kategori: 'Film', isim: 'the prestige' },
    { kategori: 'Film', isim: 'gladiator' },
    { kategori: 'Film', isim: 'amelie' },
    { kategori: 'Film', isim: 'eternal sunshine of the spotless mind' },
    { kategori: 'Kitap', isim: '1984' },
    { kategori: 'Kitap', isim: 'sapiens: a brief history of humankind' },
    { kategori: 'Kitap', isim: 'to kill a mockingbird' },
    { kategori: 'Kitap', isim: 'the catcher in the rye' },
    { kategori: 'Kitap', isim: 'one hundred years of solitude' },
    { kategori: 'Kitap', isim: 'animal farm' },
    { kategori: 'Kitap', isim: 'the diary of a young girl' },
    { kategori: 'Kitap', isim: 'brave new world' },
    { kategori: 'Kitap', isim: 'crime and punishment' },
    { kategori: 'film', isim: 'the godfather' },
    { kategori: 'müzik', isim: 'thriller' },
    { kategori: 'spor', isim: 'michael jordan: the life' },
    { kategori: 'sanat', isim: 'leonardo da vinci' },
    { kategori: 'bilim', isim: 'the selfish gene' },
    { kategori: 'tarih', isim: 'a short history of nearly everything' },
    { kategori: 'yemek', isim: 'mastering the art of french cooking' },
    { kategori: 'gezi', isim: 'lonely planet: japan' },
    { kategori: 'felsefe', isim: 'thus spoke zarathustra' },
    { kategori: 'biyografi', isim: 'steve jobs' },
    { kategori: 'dil', isim: 'the elements of style' },
    { kategori: 'psikoloji', isim: 'thinking, fast and slow' },
    { kategori: 'ekonomi', isim: 'the wealth of nations' },
    { kategori: 'coğrafya', isim: 'guns, germs, and steel' },
    { kategori: 'sosyoloji', isim: 'the culture of narcissism' },
    { kategori: 'hukuk', isim: 'to kill a mockingbird' },
    { kategori: 'astrofizik', isim: 'a brief history of time' },
    { kategori: 'politika', isim: 'the prince' },
    { kategori: 'moda', isim: 'the little dictionary of fashion' },
    { kategori: 'mitoloji', isim: 'iliada' },
    { kategori: 'çevre bilimi', isim: 'iklim değişikliği' },
    { kategori: 'felsefe', isim: 'varoluşçuluk' },
    { kategori: 'sosyoloji', isim: 'toplumsal cinsiyet' },
    { kategori: 'coğrafya', isim: 'dünya atlası' },
    { kategori: 'tarih', isim: 'ikinci dünya savaşı' },
    { kategori: 'psikoloji', isim: 'insan davranışı' },
    { kategori: 'sanat', isim: 'mona lisa' },
    { kategori: 'müzik', isim: 'beethoven' },
    { kategori: 'bilim', isim: 'evrim teorisi' },
    { kategori: 'teknoloji', isim: 'yapay zeka' },
    { kategori: 'ekonomi', isim: 'globalizasyon' },
    { kategori: 'savaş tarihi', isim: 'napolyon savaşları' },
    { kategori: 'sinema', isim: 'the godfather' },
    { kategori: 'spor', isim: 'futbol' },
    { kategori: 'yemek', isim: 'pizza' },
    { kategori: 'edebiyat', isim: 'hamlet' },
    { kategori: 'televizyon', isim: 'game of thrones' },
    { kategori: 'moda', isim: 'little black dress' },
    { kategori: 'evrim', isim: 'insanın evrimi' },
    { kategori: 'müzik', isim: 'tarkan' },
    { kategori: 'spor', isim: 'bursaspor' },
    { kategori: 'edebiyat', isim: 'ahmet hamdi tanpınar' },
    { kategori: 'sinema', isim: 'zeki demirkubuz' },
    { kategori: 'sanat', isim: 'izzet keribar' },
    { kategori: 'tarih', isim: 'hattuşaş' },
    { kategori: 'müzik', isim: 'sezen cumhur önal' },
    { kategori: 'spor', isim: 'eczacıbaşı vitra' },
    { kategori: 'edebiyat', isim: 'sabahattin ali' },
    { kategori: 'sinema', isim: 'lütfi akad' },
    { kategori: 'moda', isim: 'arzu kaprol' },
    { kategori: 'sanat', isim: 'bedri baykam' },
    { kategori: 'tarih', isim: 'türk kurtuluş savaşı' },
    { kategori: 'müzik', isim: 'cem adrian' },
    { kategori: 'spor', isim: 'galatasaray' },
    { kategori: 'edebiyat', isim: 'cemal süreya' },
    { kategori: 'sinema', isim: 'nuri bilge ceylan' },
    { kategori: 'sanat', isim: 'ferit özşen' },
    { kategori: 'tarih', isim: 'osmanlı İmparatorluğu' },
    { kategori: 'müzik', isim: 'mor ve ötesi' },
    { kategori: 'spor', isim: 'fenerbahçe' },
    { kategori: 'edebiyat', isim: 'cemil meriç' },
    { kategori: 'sinema', isim: 'yavuz turgul' },
    { kategori: 'moda', isim: 'beymen' },
    { kategori: 'sanat', isim: 'bedri rahmi eyüboğlu' },
    { kategori: 'tarih', isim: 'anadolu medeniyetleri' },
    { kategori: 'müzik', isim: 'teoman' },
    { kategori: 'spor', isim: 'beşiktaş' },
    { kategori: 'edebiyat', isim: 'nazım hikmet' },
    { kategori: 'sinema', isim: 'yeşilçam' },
    { kategori: 'sanat', isim: 'abidin dino' },
    { kategori: 'tarih', isim: 'Atatürk devrimleri' },
    { kategori: 'müzik', isim: 'sefa topsakal' },
    { kategori: 'spor', isim: 'trabzonspor' },
    { kategori: 'edebiyat', isim: 'ahmet haşim' },
    { kategori: 'sinema', isim: 'necati cumalı' },
    { kategori: 'moda', isim: 'hakan yıldırım' },
    { kategori: 'sanat', isim: 'fikret mualla' },
    { kategori: 'kelime', isim: 'boğaziçi' },
    { kategori: 'kelime', isim: 'anadolu' },
    { kategori: 'gazete', isim: 'cumhuriyet' },
    { kategori: 'banka', isim: 'iş bankası' },
    { kategori: 'banka', isim: 'garanti' },
    { kategori: 'banka', isim: 'akbank' },
    { kategori: 'bira', isim: 'efes' },
    { kategori: 'bira', isim: 'bomonti' },
    { kategori: 'içki', isim: 'rakı' },
    { kategori: 'semt', isim: 'beyoğlu' },
    { kategori: 'semt', isim: 'kadıköy' },
    { kategori: 'semt', isim: 'karaköy' },
    { kategori: 'renk', isim: 'kırmızı' },
    { kategori: 'renk', isim: 'mavi' },
    { kategori: 'renk', isim: 'yeşil' },
    { kategori: 'yemek', isim: 'mantı' },
    { kategori: 'yemek', isim: 'dolma' },
    { kategori: 'yemek', isim: 'köfte' },
    { kategori: 'meyve', isim: 'elma' },
    { kategori: 'meyve', isim: 'üzüm' },
    { kategori: 'meyve', isim: 'portakal' },
    { kategori: 'sebze', isim: 'patates' },
    { kategori: 'sebze', isim: 'domates' },
    { kategori: 'sebze', isim: 'biber' },
    { kategori: 'araba', isim: 'anadol' },
    { kategori: 'araba', isim: 'fiat' },
    { kategori: 'araba', isim: 'renault' },
    { kategori: 'dizi', isim: 'kurtlar vadisi' },
    { kategori: 'dizi', isim: 'diriliş ertuğrul' },
    { kategori: 'dizi', isim: 'muhteşem yüzyıl' },
    { kategori: 'film', isim: 'gemide' },
    { kategori: 'film', isim: 'duvara karşı' },
    { kategori: 'film', isim: 'selvi boylum al yazmalım' },
    { kategori: 'kitap', isim: 'sabahattin ali - madonna in a fur coat' },
    { kategori: 'kitap', isim: 'orhan pamuk - kar' },
    { kategori: 'kitap', isim: 'refik halit karay - memleket hikayeleri' },
    { kategori: 'şair', isim: 'nazım hikmet' },
    { kategori: 'şair', isim: 'attila İlhan' },
    { kategori: 'şair', isim: 'cemal süreya' },
    { kategori: 'müzik', isim: 'barış manço' },
]
const secilen = ihtimaller[Math.floor(Math.random() * ihtimaller.length)];
const len = secilen.isim.replaceAll(' ', '').length;
let current = 0;
let errorCount = 0;
const ids = [
    ['zemin', 'idam-tahtasi-dik', 'idam-tahtasi-yatay', 'idam-tahtasi-assagi'],
    ['kafa'],
    ['govde', 'ip'],
    ['sag-kol'],
    ['sol-kol'],
    ['sag-bacak'],
    ['sol-bacak'],
]

$(function () {

    $('#kategori').html(secilen.kategori)

    secilen.isim.split(' ').forEach(function (kelime) {
        for (var i = 0; i < kelime.length; i++) {
            $('#girdi').append(`<input type="text" actual="${kelime.charAt(i)}" class="girdi-item" maxlength="1" readonly >`)
        }
        $('#girdi').append(`<br>`)
    });

    $('.klavye-girdisi').hover(function () {
        $('#hovered').html($(this).val())
    });

    $('#orta-cizgi').hover(function () {
        $('#hovered').html(`
        <div style="width: 200px">
        <span>
        Öncelikle tüm ekip arkadaşıma yani Neriman, Ömer ve Naza içten teşekkürlerimi iletiyorum, birlikte güzel günlerimiz oldu ve olmaya devam edecek öte yandan burada bazı insanlar için yazılar yazmak istiyorum.<br><br><br>
        <strong>Neriman</strong> ile başlayalım, Neriman bizi bir değil iki kere ekmesine rağmen kendisine hala güvenim var nasıl oluyor bilmiyorum genelde engel atar hayatıma devam ederdim, ekip arkadaşın olunca farklı oluyormuş, affedici olmak gerekiyormuş...<br><br>
        <strong>Ömere</strong> gelirsek, Kendisi ÜSKÜDAR'da yaşıyor nedense çok belirtiyor, duşuyla meşhur bir arkadaşım ve kendisini severim.<br><br>
        <strong>Naza</strong> fonksiyonuna gelirsek, döneri, pilavı çok sever hatta pilav üstü tavuk yanında bol turşu ve şalgam anam babam... kendisi beni projelerimde beni sürekli desteklediği için minnettarım.<br><br>
        <strong>Ümmügülsüm</strong> ise yine çok sevdiğim bir arkadaşım samimi birisi ama halili biraz nefes aldırsa daha iyi biri olur bence...<br><br>
        <strong>Mislina</strong> ise ne desem bilemedim, üzerine biraz fazla gittim pişmanım, kendi halinde bıraktım umarım doğru olanı yapmışımdır.<br><br>
        <strong>Ender(kerem)</strong> ise metroda kendisine sürekli ender demem ama asla benim ismim ender değil dememesi üzerine aldığı bir lakap, sonunda istediği bir ekipte olduğu için onun adına mutluyum.<br><br>
        <strong>Enes(emin)</strong>, kahve.
        <br><br><br><br>
        </span>
        </div>`)
    });

    $('.klavye-girdisi').click(function () {
        if (secilen.isim.includes($(this).val())) {
            $(this).css('background-color', '#00cc00')
            let char = $(this).val();

            $('.girdi-item').each(function (i) {
                if ($(this).attr('actual') === char) {
                    $(this).val(char)
                    current++;

                    if (current === len) {
                        alert('Tebrik ederim!! Bu mesajı kapattığında yeni bir oyun başlatılacak.')
                        document.location.reload()
                    }
                }
            });
        }
        else {
            $(this).css('background-color', 'red')
            update();
            errorCount++;
        }
    });
});

function update() {
    ids[errorCount].forEach(function (item) {
        $(`#${item}`).css('display', 'block');
    });
    if (errorCount === 6) {
        alert(`üzgünüm, kaybettin. Cevap "${secilen.isim}"'di. Bu mesajı kapattığında yeni bir oyun başlatılacak.`)
        document.location.reload()
    }
}


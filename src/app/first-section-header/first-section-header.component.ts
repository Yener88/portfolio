import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section-header',
  templateUrl: './first-section-header.component.html',
  styleUrls: ['./first-section-header.component.scss']
})

export class FirstSectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Foto Rechts-Klick gesperrt!!
    let fotos = document.getElementsByTagName('img');
    for (var i = 0; i < fotos.length; i++) {
      (function (index) {
        fotos[index].addEventListener("contextmenu", (event) => {
          event.preventDefault();
          console.log("Right Click on picture: " + index + " blocked!!!");
        })
      })(i);
    }

    // Scroll funktion
    var navbar = document.getElementById("navbar");
    var lastScroll = 0;
    var navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue("height");

    window.onscroll = function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        navbar.style.top = "-" + navbarHeight;
      } else {
        navbar.style.top = "0";
      }
      lastScroll = currentScroll;
    }

    // Scroll nach oben Buttton erscheint erst nach dem scrollen
    const scrollButton = document.getElementById("scroll-button");
    scrollButton.style.display = "none";
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
    scrollButton.addEventListener("click", () => {
      window.location.href = "#home";
    });
  }

  // Open Mobile Navbar
  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('slide');
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }
  // Close by Select Section in the menu to see the selected Section
  openContact() {
    this.closeMobileNavbar();
  }

  openAbout() {
    this.closeMobileNavbar();
  }

  openProjects() {
    this.closeMobileNavbar();
  }

  getElById(id: any, text: any) {      // this.getElById('trans',``);
    document.getElementById(id).innerHTML = `${text}`;;
  }
  // ''''''''''''''''TRANSLATE FUNCTION''''''''''''''''
  clickLanguageDE() {
    this.getElById('trans1', `ÜBER MICH`);
    this.getElById('trans2', `PROJEKTE`);
    this.getElById('trans3', `KONTAKT`);
    this.getElById('trans4', `Hallo, <br>
    ich bin <span style="color: #fa2759;">Yener</span> Bas <br>
    Frontend Entwickl<span style="color: #2dfcd8;">e</span>r`);
    this.getElById('trans5', `Technologien`);
    this.getElById('trans6', `Projekte`);
    this.getElById('trans7', `Laden Sie die mobile Version(APK)`);
    this.getElById('trans8', `Kontaktformular`);
    this.getElById('trans9', `Kontaktieren Sie uns über das untenstehende Formular oder per E-Mail an <a href="mailto: yener.bas@outlook.de" style="color: #2dfcd8; text-decoration: none;">yener.bas@outlook.de</a>`);
    this.getElById('trans10', `Name`);
    this.getElById('trans11', `E-Mail Adresse`);
    this.getElById('trans12', `Nachricht`);
    this.getElById('trans13', `Senden`);
    this.getElById('trans14', `Impressum`);
    this.getElById('trans15', `Datenschutz`);
    this.getElById('about', `Über mich`);
    this.getElById('trans17', `<em>" Die wahre Großzügigkeit der Zukunft gegenüber besteht darin, in der Gegenwart alles zu geben. "</em>`);
    this.getElById('trans18', `Meine Reise begann`);
    this.getElById('trans19', `" Schon während meiner Schulzeit habe ich erste Erfahrungen gemacht und mich schon sehr für Soft- und Hardware unterschiedlicher Elektronik interessiert. "`);
    this.getElById('trans20', `Erster Kontakt`);
    this.getElById('trans21', `" Mit 15 Jahren programmierte ich meine erste Homepage, die wie ein Social-Media-Profil über mich auf Basis von HTML/CSS aufgebaut war. "`);
    this.getElById('trans22', `IT-Erfahrung`);
    this.getElById('trans23', `" Nach der Schule habe ich eine Ausbildung zum Informationselektroniker absolviert und insgesamt rund 9 Jahre Berufserfahrung gesammelt. "`);
    this.getElById('trans24', `Frontend Entwickler`);
    this.getElById('trans25', `" Um meine Leidenschaft zum Beruf zu machen, habe ich im August 2022 den Intensivkurs an der Developer Academy absolviert. "`);
    this.getElById('trans26', `Impressum`);
    this.getElById('trans27', `NACH § 5 TMG`);
    this.getElById('trans28', `VERTRETEN DURCH`);
    this.getElById('trans29', `KONTAKT:`);
    document.getElementById('name').setAttribute('placeholder', 'Gebe deinen Namen ein');
    document.getElementById('message').setAttribute('placeholder', 'Gebe deine E-Mail Adresse ein');
    document.getElementById('email').setAttribute('placeholder', 'Gebe hier deine Nachricht ein');
    this.getElById('workAppsDescrip1', `<br>Das Index der Pokemon, das auf API basierte Pokedex! Mit umfangreichen Details und erweiterten Funktionen wie in der Suche alle Pokemon zu finden, zu favorisieren und zu verwalten.`);
    this.getElById('workAppsDescrip2', `<br>El Pollo Loco ist ein humorvolles Jump-and-Run-Spiel, das mit objektorientiertem JavaScript erstellt wurde und als Einführung in die Angular-Entwicklung dient.`);
    this.getElById('workAppsDescrip3', `<br>Team Table ist ein Tool, mit dem Sie Ihre Arbeit organisieren und effizienter gestalten können, ähnlich einem Kanban-Board.`);
    this.getElById('workAppsDescrip4', `<br>Das beliebte Kartenspiel, das in einem Online-Desktop-Format verfügbar ist und es mehreren Benutzern ermöglicht, gleichzeitig auf verschiedenen Geräten zu spielen.`);
    this.getElById('trans30', `PROJEKTE`);
    this.getElById('trans31', `ÜBER MICH`);
    this.getElById('trans32', `KONTAKT`);
  }

  clickLanguageEN() {
    this.getElById('trans1', `ABOUT`);
    this.getElById('trans2', `PROJECTS`);
    this.getElById('trans3', `CONTACT`);
    this.getElById('trans4', `Hi, <br>
    i'm <span style="color: #fa2759;">Yener</span> Bas <br>
    frontend develop<span style="color: #2dfcd8;">e</span>r`);
    this.getElById('trans5', `Technologies`);
    this.getElById('trans6', `Projects`);
    this.getElById('trans7', `Download the mobile Version(APK)`);
    this.getElById('trans8', `Contact me.`);
    this.getElById('trans9', `Get in touch via the form below, or by emailing <a href="mailto: yener.bas@outlook.de" style="color: #2dfcd8; text-decoration: none;">yener.bas@outlook.de</a>`);
    this.getElById('trans10', `Name`);
    this.getElById('trans11', `E-mail address`);
    this.getElById('trans12', `Message`);
    this.getElById('trans13', `Send`);
    this.getElById('trans14', `Imprint`);
    this.getElById('trans15', `Privacy Policy`);
    this.getElById('about', `About me`);
    this.getElById('trans17', `<em>" Real generosity toward the future lies in giving all to the present. "</em>`);
    this.getElById('trans18', `My Journey Began`);
    this.getElById('trans19', `" When I was at school, I made my first experience and was already very interested in software and
    hardware of different kinds of electronics. "`);
    this.getElById('trans20', `First Contact`);
    this.getElById('trans21', `" At the age of 15, I programmed my first homepage which was built like a social media profile about myself based on HTML/CSS. "`);
    this.getElById('trans22', `IT Experience`);
    this.getElById('trans23', `" After school, I completed an apprenticeship in IT and gained a total of around 8 years of professional experience. "`);
    this.getElById('trans24', `Software Engineer`);
    this.getElById('trans25', `" To turn my passion into a profession, I completed the intensive course at the Developer Academy in August 2022. "`);
    this.getElById('trans26', `Imprint`);
    this.getElById('trans27', `ACCORDING TO § 5 TMG`);
    this.getElById('trans28', `REPRESENTED BY:`);
    this.getElById('trans29', `CONTACT:`);
    document.getElementById('name').setAttribute('placeholder', 'Enter your name');
    document.getElementById('message').setAttribute('placeholder', 'Enter your E-mail address');
    document.getElementById('email').setAttribute('placeholder', 'Enter your message');
    this.getElById('workAppsDescrip1', `<br>Index of Pokemon, API based Pokedex! With extensive details and advanced functions such as finding, favorite and managing all Pokemon in the search.`);
    this.getElById('workAppsDescrip2', `<br>El Pollo Loco is a humorous jump-and-run game created using object-oriented JavaScript and serving as an introduction to Angular development.`);
    this.getElById('workAppsDescrip3', `<br>Team Table is a tool used to organize and improve the efficiency of your work, similar to a Kanban Board.`);
    this.getElById('workAppsDescrip4', `<br>The popular card game available in an online, desktop format, allowing multiple users to play on various devices simultaneously.`);
    this.getElById('trans30', `PROJECTS`);
    this.getElById('trans31', `ABOUT`);
    this.getElById('trans32', `KONTAKT`);
  }

  clickLanguageTR() {
    this.getElById('trans1', `HAKKIMDA`);
    this.getElById('trans2', `PROJELER`);
    this.getElById('trans3', `İLETİŞİM`);
    this.getElById('trans4', `Merhaba, <br>
    ben <span style="color: #fa2759;">Yener</span> Baş <br> frontend develop<span style="color: #2dfcd8;">e</span>r`);
    this.getElById('trans5', `Teknolojiler`);
    this.getElById('trans6', `Projeler`);
    this.getElById('trans7', `Mobil Versiyonu burda İndir(APK)`);
    this.getElById('trans8', `İletişime geçmek.`);
    this.getElById('trans9', `Aşağıdaki form aracılığıyla veya <a href="mailto: yener.bas@outlook.de" style="color: #2dfcd8; text-decoration: none;">yener.bas@outlook.de</a> adresine e-posta göndererek iletişime geçin`);
    this.getElById('trans10', `İsim`);
    this.getElById('trans11', `E-posta adresi`);
    this.getElById('trans12', `Mesaj`);
    this.getElById('trans13', `Gönder`);
    this.getElById('trans14', `Künye`);
    this.getElById('trans15', `Kişisel verilerin korunması`);
    this.getElById('about', `Hakkımda`);
    this.getElById('trans17', `<em>" 
    Geleceğe yönelik gerçek cömertlik, her şeyinizi şimdiki zamanda vermektir. "</em>`);
    this.getElById('trans18', `Yolculuğum Başladı`);
    this.getElById('trans19', `" Okuldayken ilk deneyimimi yaptım ve farklı elektronik türlerinin yazılım ve donanımına zaten çok ilgi duyuyordum. "`);
    this.getElById('trans20', `İlk temas`);
    this.getElById('trans21', `" 15 yaşında, kendimle ilgili bir sosyal medya profili gibi oluşturulmuş ilk ana sayfamı HTML/CSS tabanlı olarak programladım. "`);
    this.getElById('trans22', `BT Deneyimi`);
    this.getElById('trans23', `" Okuldan sonra BT alanında çıraklık yaptım ve toplamda yaklaşık 8 yıllık mesleki deneyim kazandım. "`);
    this.getElById('trans24', `Yazılım Mühendisi`);
    this.getElById('trans25', `" Tutkumu mesleğe dönüştürmek için Developer Academy'de yoğun kursu Ağustos 2022'de tamamladım. "`);
    this.getElById('trans26', `Künye`);
    this.getElById('trans27', `§ 5 TMG'YE GÖRE`);
    this.getElById('trans28', `İLE TEMSİL EDİLEN`);
    this.getElById('trans29', `TEMAS:`);
    document.getElementById('name').setAttribute('placeholder', 'Adınızı giriniz');
    document.getElementById('message').setAttribute('placeholder', 'E-posta adresinizi giriniz');
    document.getElementById('email').setAttribute('placeholder', 'Mesajınızı buraya girin');
    this.getElById('workAppsDescrip1', `<br>Pokemon Endeksi, API tabanlı Pokedex! Aramada tüm Pokemon'u bulma, favorilere ekleme ve yönetme gibi kapsamlı ayrıntılar ve gelişmiş işlevlerle.`);
    this.getElById('workAppsDescrip2', `<br>El Pollo Loco, nesne yönelimli JavaScript kullanılarak oluşturulan ve Angular geliştirmeye giriş işlevi gören komik bir zıpla ve koş oyunudur.`);
    this.getElById('workAppsDescrip3', `<br>Team Table, işinizi organize etmeniz ve verimliliğinizi arttırmak için kullanabileceğiniz bir araçtır, Kanban Board benzeri.`);
    this.getElById('workAppsDescrip4', `<br>Çevrimiçi, masaüstü biçiminde sunulan ve birden çok kullanıcının aynı anda çeşitli cihazlarda oynamasına olanak tanıyan popüler kart oyunu.`);
    this.getElById('trans30', `PROJELER`);
    this.getElById('trans31', `HAKKIMDA`);
    this.getElById('trans32', `İLETİŞİM`);
  }
}

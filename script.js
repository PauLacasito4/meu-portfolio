    // Efecto de texto "Paulacasito"
    const texto = "Paulacasito";
    const target = document.getElementById("typing-text");

    let i = 0;
    let forward = true;

    function escribirTexto() {
      if (forward) {
        target.textContent = texto.slice(0, i);
        i++;
        if (i > texto.length) {
          forward = false;
          setTimeout(escribirTexto, 1000);
        } else {
          setTimeout(escribirTexto, 150);
        }
      } else {
        i--;
        target.textContent = texto.slice(0, i);
        if (i < 0) {
          forward = true;
          setTimeout(escribirTexto, 800);
        } else {
          setTimeout(escribirTexto, 75);
        }
      }
    }

    escribirTexto();

    // Estrellas de fondo
    const container = document.querySelector(".stars");

    for (let j = 0; j < 100; j++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const top = Math.random() * 100;
      const left = Math.random() * 100;

      star.style.top = `${top}%`;
      star.style.left = `${left}%`;

      container.appendChild(star);
    }

    // Selector de idioma
    const btnIdioma = document.getElementById("btn-idioma");
    const listaIdiomas = document.getElementById("lista-idiomas");
    const btnIdiomaLabel = document.getElementById("btn-idioma-label");
    const banderaActual = document.getElementById("bandera-actual");

btnIdioma.addEventListener("click", () => {
  const expanded = btnIdioma.getAttribute("aria-expanded") === "true";
  btnIdioma.setAttribute("aria-expanded", !expanded);
  listaIdiomas.classList.toggle("show"); 
  if (!expanded) {
    listaIdiomas.focus();
  }
});

// Y en las demás funciones:
listaIdiomas.classList.remove("show"); 

    // Traducciones en objetos
    const traducciones = {
      es: {
        title: "Portfolio de Pau",
        nav_sobreMi: "SOBRE MI",
        nav_Habilidades: "HABILIDADES",
        nav_Educacion: "EDUCACIÓN",
        nav_Certificados: "CERTIFICADOS",
        nav_Experiencia: "EXPERIENCIA",
        nav_Proyectos: "PROYECTOS",
        nav_Contacto: "CONTACTO",
        btn_idioma_castellano: "Castellano",
        idioma_castellano: "Castellano",
        idioma_valenciano: "Valenciano",
        idioma_ingles: "Inglés",
        idioma_portugues: "Portugués",
        idioma_gallego: "Gallego",
        h2_sobreMi: "SOBRE MI",
        saludo_hola: "Hola,",
        soy: "Soy",
        soy_titulo: "Soy",
        expertise_texto: "Full-Stack Developer en formación",
        Descargar_CV: "Descargar CV",
        h2_habilidades: "HABILIDADES",
        hab_html: "HTML",
        hab_css: "CSS",
        hab_js: "JavaScript",
        hab_java: "Java",
        hab_php: "PHP",
        hab_python: "Python",
        hab_mysql: "MySQL",
        hab_postgresql: "PostgreSQL",
        hab_linux: "Linux",
        hab_windows: "Windows",
        hab_vmware: "VMware",
        hab_vscode: "VS Code",
        hab_xampp: "XAMPP",
        hab_git: "Git",
        hab_github: "GitHub",
        hab_figma: "Figma",
        hab_docker: "Docker",
        hab_wordpress: "WordPress",
        hab_photoshop: "Photoshop",
        hab_office: "Office",
        hab_virtualbox: "VirtualBox",
        hab_tailwind: "Tailwind CSS",
        hab_odoo: "Odoo",
        hab_packettracer: "Packet Tracer",
        h2_educacion: "EDUCACIÓN",
        fecha_2024_actual: "2024 - actualmente",
        grado_daw: "Grado Superior en Desarrollo de Aplicaciones Web",
        ies_jose_rodrigo_botet: "IES José Rodrigo Botet",
        fecha_2022_2024: "2022 - 2024",
        grado_smr: "Grado Medio en Sistemas Microinformáticos y Redes",
        centro_la_purisima: "Centro Privado La Purísima Valencia",
        fecha_2017_2022: "2017 - 2022",
        eso: "Educación Secundaria Obligatoria",
        centro_asuncion: "Centro Concertado de Enseñanza Asunción de Nuestra Señora",
        h2_certificados: "CERTIFICADOS",
        img_certificado1_alt: "Certificado de Introducción a SQL",
        btn_ver_certificado1: "Ver certificado",
        img_certificado2_alt: "Certificado de Copilot 365",
        btn_ver_certificado2: "Ver certificado",
        h2_experiencia: "EXPERIENCIA",
        fecha_practicas_2025: "20/03/2025 - 13/06/2025",
        practicas_grado_medio: "Prácticas Grado Medio",
        tecnico_sistemas_policia: "Técnico de sistemas microinformáticos en la Policía Local de Riba-roja de Túria",
        h2_proyectos: "PROYECTOS",
        proyectos_trabajando: "Estamos trabajando en los proyectos",
        h2_contacto: "CONTACTO",
        contacto_envio_mensaje: "Envíame un mensaje",
        label_nombre: "Nombre",
        placeholder_nombre: "Tu nombre",
        label_email: "Correo electrónico",
        placeholder_email: "tu@email.com",
        label_mensaje: "Mensaje",
        placeholder_mensaje: "Escribe tu mensaje aquí...",
        boton_enviar: "Enviar mensaje",
        footer_derechos: "© 2025 Pau Ribera. Todos los derechos reservados."
      },
      val: {
        title: "Portfolio de Pau",
        nav_sobreMi: "SOBRE MI",
        nav_Habilidades: "HABILITATS",
        nav_Educacion: "EDUCACIÓ",
        nav_Certificados: "CERTIFICATS",
        nav_Experiencia: "EXPERIÈNCIA",
        nav_Proyectos: "PROJECTES",
        nav_Contacto: "CONTACTE",
        btn_idioma_castellano: "Valencià",
        idioma_castellano: "Castellà",
        idioma_valenciano: "Valencià",
        idioma_ingles: "Anglés",
        idioma_portugues: "Portugués",
        idioma_gallego: "Gallec",
        h2_sobreMi: "SOBRE MI",
        saludo_hola: "Hola,",
        soy: "Sóc",
        soy_titulo: "Sóc",
        expertise_texto: "Full-Stack Developer en formació",
        Descargar_CV: "Descarregar CV",
        h2_habilidades: "HABILITATS",
        hab_html: "HTML",
        hab_css: "CSS",
        hab_js: "JavaScript",
        hab_java: "Java",
        hab_php: "PHP",
        hab_python: "Python",
        hab_mysql: "MySQL",
        hab_postgresql: "PostgreSQL",
        hab_linux: "Linux",
        hab_windows: "Windows",
        hab_vmware: "VMware",
        hab_vscode: "VS Code",
        hab_xampp: "XAMPP",
        hab_git: "Git",
        hab_github: "GitHub",
        hab_figma: "Figma",
        hab_docker: "Docker",
        hab_wordpress: "WordPress",
        hab_photoshop: "Photoshop",
        hab_office: "Office",
        hab_virtualbox: "VirtualBox",
        hab_tailwind: "Tailwind CSS",
        hab_odoo: "Odoo",
        hab_packettracer: "Packet Tracer",
        h2_educacion: "EDUCACIÓ",
        fecha_2024_actual: "2024 - actualment",
        grado_daw: "Grau Superior en Desenvolupament d'Aplicacions Web",
        ies_jose_rodrigo_botet: "IES Josep Rodrigo Botet",
        fecha_2022_2024: "2022 - 2024",
        grado_smr: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
        centro_la_purisima: "Centre Privat La Puríssima València",
        fecha_2017_2022: "2017 - 2022",
        eso: "Educació Secundària Obligatòria",
        centro_asuncion: "Centre Concertat d'Ensenyament Assumpció de Nostra Senyora",
        h2_certificados: "CERTIFICATS",
        img_certificado1_alt: "Certificat d'Introducció a SQL",
        btn_ver_certificado1: "Veure certificat",
        img_certificado2_alt: "Certificat de Copilot 365",
        btn_ver_certificado2: "Veure certificat",
        h2_experiencia: "EXPERIÈNCIA",
        fecha_practicas_2025: "20/03/2025 - 13/06/2025",
        practicas_grado_medio: "Pràctiques Grau Mitjà",
        tecnico_sistemas_policia: "Tècnic de sistemes microinformàtics a la Policia Local de Riba-roja de Túria",
        h2_proyectos: "PROJECTES",
        proyectos_trabajando: "Estem treballant en els projectes",
        h2_contacto: "CONTACTE",
        contacto_envio_mensaje: "Envia'm un missatge",
        label_nombre: "Nom",
        placeholder_nombre: "El teu nom",
        label_email: "Correu electrònic",
        placeholder_email: "elteu@email.com",
        label_mensaje: "Missatge",
        placeholder_mensaje: "Escriu el teu missatge ací...",
        boton_enviar: "Enviar missatge",
        footer_derechos: "© 2025 Pau Ribera. Tots els drets reservats."
      },
      en: {
        title: "Pau's Portfolio",
        nav_sobreMi: "ABOUT ME",
        nav_Habilidades: "SKILLS",
        nav_Educacion: "EDUCATION",
        nav_Certificados: "CERTIFICATES",
        nav_Experiencia: "EXPERIENCE",
        nav_Proyectos: "PROJECTS",
        nav_Contacto: "CONTACT",
        btn_idioma_castellano: "English",
        idioma_castellano: "Spanish",
        idioma_valenciano: "Valencian",
        idioma_ingles: "English",
        idioma_portugues: "Portuguese",
        idioma_gallego: "Galician",
        h2_sobreMi: "ABOUT ME",
        saludo_hola: "Hello,",
        soy: "I am",
        soy_titulo: "I am",
        expertise_texto: "Full-Stack Developer in training",
        Descargar_CV: "Download CV",
        h2_habilidades: "SKILLS",
        hab_html: "HTML",
        hab_css: "CSS",
        hab_js: "JavaScript",
        hab_java: "Java",
        hab_php: "PHP",
        hab_python: "Python",
        hab_mysql: "MySQL",
        hab_postgresql: "PostgreSQL",
        hab_linux: "Linux",
        hab_windows: "Windows",
        hab_vmware: "VMware",
        hab_vscode: "VS Code",
        hab_xampp: "XAMPP",
        hab_git: "Git",
        hab_github: "GitHub",
        hab_figma: "Figma",
        hab_docker: "Docker",
        hab_wordpress: "WordPress",
        hab_photoshop: "Photoshop",
        hab_office: "Office",
        hab_virtualbox: "VirtualBox",
        hab_tailwind: "Tailwind CSS",
        hab_odoo: "Odoo",
        hab_packettracer: "Packet Tracer",
        h2_educacion: "EDUCATION",
        fecha_2024_actual: "2024 - present",
        grado_daw: "Higher Degree in Web Application Development",
        ies_jose_rodrigo_botet: "IES José Rodrigo Botet",
        fecha_2022_2024: "2022 - 2024",
        grado_smr: "Medium Degree in Microcomputer Systems and Networks",
        centro_la_purisima: "Private Center La Purísima Valencia",
        fecha_2017_2022: "2017 - 2022",
        eso: "Compulsory Secondary Education",
        centro_asuncion: "Concerted Center of Teaching Assumption of Our Lady",
        h2_certificados: "CERTIFICATS",
        img_certificado1_alt: "Certificat d'Introducció a SQL",
        btn_ver_certificado: "Veure certificat",
        img_certificado2_alt: "Certificat de Copilot 365",
        h2_experiencia: "EXPERIENCE",
        fecha_practicas_2025: "03/20/2025 - 06/13/2025",
        practicas_grado_medio: "Medium Degree Internship",
        tecnico_sistemas_policia: "Microcomputer Systems Technician at the Local Police of Riba-roja de Túria",
        h2_proyectos: "PROJECTS",
        proyectos_trabajando: "We are working on the projects",
        h2_contacto: "CONTACT",
        contacto_envio_mensaje: "Send me a message",
        label_nombre: "Name",
        placeholder_nombre: "Your name",
        label_email: "Email",
        placeholder_email: "you@email.com",
        label_mensaje: "Message",
        placeholder_mensaje: "Write your message here...",
        boton_enviar: "Send message",
        footer_derechos: "© 2025 Pau Ribera. All rights reserved."
      },
      pt: {
        title: "Portfólio do Pau",
        nav_sobreMi: "SOBRE MIM",
        nav_Habilidades: "HABILIDADES",
        nav_Educacion: "EDUCAÇÃO",
        nav_Certificados: "CERTIFICADOS",
        nav_Experiencia: "EXPERIÊNCIA",
        nav_Proyectos: "PROJETOS",
        nav_Contacto: "CONTATO",
        btn_idioma_castellano: "Português",
        idioma_castellano: "Espanhol",
        idioma_valenciano: "Valenciano",
        idioma_ingles: "Inglês",
        idioma_portugues: "Português",
        idioma_gallego: "Galego",
        h2_sobreMi: "SOBRE MIM",
        saludo_hola: "Olá,",
        soy: "Sou",
        soy_titulo: "Sou",
        expertise_texto: "Desenvolvedor Full-Stack em treinamento",
        Descargar_CV: "Baixar CV",
        h2_habilidades: "HABILIDADES",
        hab_html: "HTML",
        hab_css: "CSS",
        hab_js: "JavaScript",
        hab_java: "Java",
        hab_php: "PHP",
        hab_python: "Python",
        hab_mysql: "MySQL",
        hab_postgresql: "PostgreSQL",
        hab_linux: "Linux",
        hab_windows: "Windows",
        hab_vmware: "VMware",
        hab_vscode: "VS Code",
        hab_xampp: "XAMPP",
        hab_git: "Git",
        hab_github: "GitHub",
        hab_figma: "Figma",
        hab_docker: "Docker",
        hab_wordpress: "WordPress",
        hab_photoshop: "Photoshop",
        hab_office: "Office",
        hab_virtualbox: "VirtualBox",
        hab_tailwind: "Tailwind CSS",
        hab_odoo: "Odoo",
        hab_packettracer: "Packet Tracer",
        h2_educacion: "EDUCAÇÃO",
        fecha_2024_actual: "2024 - atualmente",
        grado_daw: "Curso Superior em Desenvolvimento de Aplicações Web",
        ies_jose_rodrigo_botet: "IES José Rodrigo Botet",
        fecha_2022_2024: "2022 - 2024",
        grado_smr: "Curso Médio em Sistemas Microinformáticos e Redes",
        centro_la_purisima: "Centro Privado La Purísima Valência",
        fecha_2017_2022: "2017 - 2022",
        eso: "Ensino Secundário Obrigatório",
        centro_asuncion: "Centro Concertado de Ensino Assunção de Nossa Senhora",
        h2_certificados: "CERTIFICADOS",
        img_certificado1_alt: "Certificado de Introdução ao SQL",
        btn_ver_certificado: "Ver certificado",
        img_certificado2_alt: "Certificado de Copilot 365",
        btn_ver_certificado2: "Ver certificado",
        h2_experiencia: "EXPERIÊNCIA",
        fecha_practicas_2025: "20/03/2025 - 13/06/2025",
        practicas_grado_medio: "Estágio de Curso Médio",
        tecnico_sistemas_policia: "Técnico de sistemas microinformáticos na Polícia Local de Riba-roja de Túria",
        h2_proyectos: "PROJETOS",
        proyectos_trabajando: "Estamos trabalhando nos projetos",
        h2_contacto: "CONTATO",
        contacto_envio_mensaje: "Envie-me uma mensagem",
        label_nombre: "Nome",
        placeholder_nombre: "Seu nome",
        label_email: "Email",
        placeholder_email: "seu@email.com",
        label_mensaje: "Mensagem",
        placeholder_mensaje: "Escreva sua mensagem aqui...",
        boton_enviar: "Enviar mensagem",
        footer_derechos: "© 2025 Pau Ribera. Todos os direitos reservados."
      },
      gl: {
        title: "Portfolio do Pau",
        nav_sobreMi: "SOBRE MIM",
        nav_Habilidades: "HABILIDADES",
        nav_Educacion: "EDUCAÇÃO",
        nav_Certificados: "CERTIFICADOS",
        nav_Experiencia: "EXPERIENCIA",
        nav_Proyectos: "PROXECTOS",
        nav_Contacto: "CONTACTO",
        btn_idioma_castellano: "Galego",
        idioma_castellano: "Castelán",
        idioma_valenciano: "Valenciano",
        idioma_ingles: "Inglés",
        idioma_portugues: "Portugués",
        idioma_gallego: "Galego",
        h2_sobreMi: "SOBRE MIM",
        saludo_hola: "Ola,",
        soy: "Son",
        soy_titulo: "Son",
        expertise_texto: "Desenvolvedor Full-Stack en formación",
        Descargar_CV: "Descargar CV",
        h2_habilidades: "HABILIDADES",
        hab_html: "HTML",
        hab_css: "CSS",
        hab_js: "JavaScript",
        hab_java: "Java",
        hab_php: "PHP",
        hab_python: "Python",
        hab_mysql: "MySQL",
        hab_postgresql: "PostgreSQL",
        hab_linux: "Linux",
        hab_windows: "Windows",
        hab_vmware: "VMware",
        hab_vscode: "VS Code",
        hab_xampp: "XAMPP",
        hab_git: "Git",
        hab_github: "GitHub",
        hab_figma: "Figma",
        hab_docker: "Docker",
        hab_wordpress: "WordPress",
        hab_photoshop: "Photoshop",
        hab_office: "Office",
        hab_virtualbox: "VirtualBox",
        hab_tailwind: "Tailwind CSS",
        hab_odoo: "Odoo",
        hab_packettracer: "Packet Tracer",
        h2_educacion: "EDUCACIÓN",
        fecha_2024_actual: "2024 - actualmente",
        grado_daw: "Grao Superior en Desenvolvemento de Aplicacións Web",
        ies_jose_rodrigo_botet: "IES José Rodrigo Botet",
        fecha_2022_2024: "2022 - 2024",
        grado_smr: "Grao Medio en Sistemas Microinformáticos e Redes",
        centro_la_purisima: "Centro Privado La Purísima Valencia",
        fecha_2017_2022: "2017 - 2022",
        eso: "Educación Secundaria Obrigatoria",
        centro_asuncion: "Centro Concertado de Ensino Asunción de Nosa Señora",
        h2_certificados: "CERTIFICADOS",
img_certificado1_alt: "Certificado de Introdución a SQL",
btn_ver_certificado1: "Ver certificado",
img_certificado2_alt: "Certificado de Copilot 365",
btn_ver_certificado2: "Ver certificado",
        h2_experiencia: "EXPERIENCIA",
        fecha_practicas_2025: "20/03/2025 - 13/06/2025",
        practicas_grado_medio: "Prácticas Grao Medio",
        tecnico_sistemas_policia: "Técnico de sistemas microinformáticos na Policía Local de Riba-roja de Túria",
        h2_proyectos: "PROXECTOS",
        proyectos_trabajando: "Estamos a traballar nos proxectos",
        h2_contacto: "CONTACTO",
        contacto_envio_mensaje: "Envía-me unha mensaxe",
        label_nombre: "Nome",
        placeholder_nombre: "O teu nome",
        label_email: "Correo electrónico",
        placeholder_email: "o_teu@email.com",
        label_mensaje: "Mensaxe",
        placeholder_mensaje: "Escribe a túa mensaxe aquí...",
        boton_enviar: "Enviar mensaxe",
        footer_derechos: "© 2025 Pau Ribera. Todos os dereitos reservados."
      }
    };

    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
      document.querySelectorAll('[data-traduccion]').forEach(el => {
        const clave = el.getAttribute('data-traduccion');
        if (traducciones[idioma][clave]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.setAttribute('placeholder', traducciones[idioma][clave]);
          } else {
            el.textContent = traducciones[idioma][clave];
          }
        }
      });

      // Actualizar bandera y texto del botón de idioma
      const opcionIdioma = document.querySelector(`[data-idioma="${idioma}"]`);
      if (opcionIdioma) {
        const img = opcionIdioma.querySelector('img');
        if (img) {
          banderaActual.src = img.src;
          banderaActual.alt = img.alt;
        }
        btnIdiomaLabel.textContent = traducciones[idioma]['idioma_' + idioma];
      }

      // Actualizar atributos aria-selected
      document.querySelectorAll('#lista-idiomas li').forEach(li => {
        li.setAttribute('aria-selected', li.getAttribute('data-idioma') === idioma ? 'true' : 'false');
      });

      // Cerrar el menú de idiomas
      listaIdiomas.classList.add('oculto');
      btnIdioma.setAttribute('aria-expanded', 'false');
    }

    // Evento de clic en las opciones de idioma
    document.querySelectorAll('#lista-idiomas li').forEach(item => {
      item.addEventListener('click', () => {
        const idioma = item.getAttribute('data-idioma');
        cambiarIdioma(idioma);
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!btnIdioma.contains(e.target) && !listaIdiomas.contains(e.target)) {
        listaIdiomas.classList.add('oculto');
        btnIdioma.setAttribute('aria-expanded', 'false');
      }
    });

    // Manejar teclado para accesibilidad
    listaIdiomas.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        listaIdiomas.classList.add('oculto');
        btnIdioma.setAttribute('aria-expanded', 'false');
        btnIdioma.focus();
      }
    });
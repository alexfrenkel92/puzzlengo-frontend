export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        en: 'English',
        es: 'Espanol'
      },
      menu: {
        dashboard: 'Tablero',
        notifications: 'Notificaciones',
        health: 'Mi salud',
        login: 'Acceso',
        profiling: 'Mi perfil',
        balance: 'Equilibrio',
        settings: 'Ajustes',
        logout: 'Cerrar sesión',
        header_light: 'ligero',
        header_dark: 'oscuro',
        header_language: 'idioma'
      },
      balance: {
        title: 'Gaste el saldo ganado comprando <b>tarjetas de regalo electrónicas</b> o <b>Donando</b> a proyectos de caridad.',
        eGift: {
          title: 'Las tarjetas de regalo electrónicas significan entrega instantánea, un rastro digital y sin necesidad de inventario',
          description: '<li>Seleccione una tarjeta de una marca</li><li>Seleccione o proporcione una cantidad para gastar /li><li>Complete el nombre y la dirección de correo electrónico del destinatario y agregue un mensaje si lo desea</li><li>In case you are buying for yourself, press the <b>Buying For Myself</b> button</li><li>Review your order then click on the <b>Buy Card</b> button</li><li>The recipient receives the Claim Code to active the eGift Card on the brand\'s page</li>'
        }
      }
    })
  })
}

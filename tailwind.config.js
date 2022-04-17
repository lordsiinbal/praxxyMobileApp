module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
   darkMode: false, // or 'media' or 'class'
   theme: {
     fontFamily:{
      'perigonSan':['Perigon-Sans']
     },
     extend: {
       color:{
        650:'#595959'
       },
       spacing:{
         '20%':'20%',
         '40%':'40%',
         '60%':'60%',
         '80%':'80%'
       }
     },
   },
   variants: {},
   plugins: [],
 }
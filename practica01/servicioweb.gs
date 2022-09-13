const doGet = (e = {}) => {
const { parameter } = e;
const { nombre = 'Arnold', apellido = 'GetSchwarzenegger', direccion = "sinaloa#302", telefono = "123456"} = parameter;
const salida = `Hola ${nombre} ${apellido} ${direccion} ${telefono}`;
return ContentService.createTextOutput(salida);
};
//regresa de forma textual los parámetros leidos con post
const doPost = (e = {}) => {
const { parameter } = e;
const { nombre = 'Arnold', apellido = 'PostSchwarzenegger', direccion= 'sinaloa#302', telefono = '123456'} = parameter;
const salida = `Hola ${nombre} ${apellido} ${direccion} ${telefono}`;
return ContentService.createTextOutput(salida);
};



import React from "react";
import Results from "./Results";

const initialValues = {
  ticketCost: 0,
  attendees: 0,
};


export default function Form() {
  const [values, setValues] = React.useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
 
  return (  
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Caculadora de impacto económico cultural</h3>
    <div className="flex flex-row items-start">
      <div className="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-10 p-4">
            <article class="prose prose-sm">
              <p><span className="font-bold"> Instrucciones: </span>Proporcione la información a continuación para calcular el impacto económico en términos de los gastos indirectos de las personas que asistentes a eventos culturales</p>
            </article>
          </div>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Costo por boleto:
                </label>
                <div className=" w-full px-3 py-2 border border-gray-300 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    value={values.ticketCost}
                    onChange={handleInputChange}
                    name="ticketCost"
                    label="Ticket Cost"
                    id="ticketCost"
                    type="number"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    aria-describedby="price-currency"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      USD
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Cantidad de personas que asistirán:
                </label>
                <div className="mt-1">
                  <input
                    value={values.attendees}
                    onChange={handleInputChange}
                    name="attendees"
                    label="Attendees"
                    id="attendees"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-10 p-4">
            <article class="prose prose-sm">
              <p> Cuando utilice estimaciones derivadas de esta calculadora, tenga siempre en cuenta las siguientes advertencias: (1) los resultados de este análisis se basan en la mediana de las varaibles,y (2) sus resultados son, por lo tanto, estimaciones y no deben utilizarse como sustituto de la realización de un estudio de impacto económico personalizado para su comunidad.</p>
            </article>
          </div>
        </div>
      </div>
      <Results 
        values={values} />
    </div>
    </div>
  )
}

const formulas = {
  otherDirectCosts: (ticketCost) => (ticketCost * 0.17005 + 19.79695).toFixed(2),
  indirectCosts: (ticketCost) => (ticketCost * 0.115 + 40).toFixed(2),
  totalCost: (ticketCost) => (ticketCost * 1.28463 + 61.46096).toFixed(2),
  eventTotal: (costs, attendees) => (costs * attendees / 2).toFixed(2),
  ivu: (totalEventCosts) => (totalEventCosts * 0.115).toFixed(2),
}

export default function Results(props) {
  const tableItems = [
    { concept: 'Otros gastos directos:', 
      perPerson: '$'+formulas.otherDirectCosts(props.values.ticketCost), 
      eventTotal: '$'+formulas.eventTotal(formulas.otherDirectCosts(props.values.ticketCost),props.values.attendees), 
      ivu: '$'+formulas.ivu(formulas.eventTotal(formulas.otherDirectCosts(props.values.ticketCost),props.values.attendees))},
    { concept: 'Gastos indirectos:', 
      perPerson: '$'+formulas.indirectCosts(props.values.ticketCost), 
      eventTotal: '$'+formulas.eventTotal(formulas.indirectCosts(props.values.ticketCost),props.values.attendees), 
      ivu: '$'+formulas.ivu(formulas.eventTotal(formulas.indirectCosts(props.values.ticketCost),props.values.attendees)) },
    { concept: 'Gasto total:', 
      perPerson: '$'+formulas.totalCost(props.values.ticketCost), 
      eventTotal: '$'+formulas.eventTotal(formulas.totalCost(props.values.ticketCost),props.values.attendees), 
      ivu: '$'+formulas.ivu(formulas.eventTotal(formulas.totalCost(props.values.ticketCost),props.values.attendees)) },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Concepto
              </th>
              <th
                scope="col"
                className="py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Por Persona
              </th>
              <th
                scope="col"
                className="py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Total Evento
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Recaudación IVU
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {tableItems.map((tableItem) => (
              <tr key={tableItem.concept}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {tableItem.concept}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Por Persona</dt>
                    <dd className="mt-1 truncate text-gray-700">{tableItem.perPerson}</dd>
                    <dt className="sr-only sm:hidden">Total Evento</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{tableItem.eventTotal}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{tableItem.perPerson}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{tableItem.eventTotal}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{tableItem.ivu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-10 p-4">
        <article class="prose text-xs font-light">
          <h3>Definiciones</h3>
          <p><span className="font-bold">Otros gastos directos:</span> gastos en bebidas o alimentos comprados durante el evento, así como recuerdos, regalos u otra mercancía.</p>
          <p><span className="font-bold">Gastos indirectos:</span> corresponde a los gastos por bebidas o alimentos comprados antes o después del evento, ropa o accesorios comprados específicamente para ese evento, transporte local, incluyendo gasolina, estacionamiento, hospedaje para asistir al evento y otros gastos relacionados con el evento.</p>
          <p><span className="font-bold">Gasto total:</span> suma de los gastos por boletos, otros gastos directos y gastos indirectos.</p>
          <p><span className="font-bold">Mediana p.p o grupo:</span> estimación de la mediana en los gastos incurridos para la persona o grupo que asisten a eventos culturales.</p>
          <p><span className="font-bold">Total (de acuerdo al número de asistentes):</span> Un estimado de lo MÍNIMO que gastarán las personas que asisten a eventos culturales.</p>
          <p><span className="font-bold">Recaudo IVU:</span> el total de dólares recibidos por el Gobierno Local y Estatal como resultado de los gastos totales.</p>
          <p> Cuando utilice estimaciones derivadas de esta calculadora, tenga siempre en cuenta las siguientes advertencias: (1) los resultados de este análisis se basan en la mediana de las variables, y (2) sus resultados son, por lo tanto, estimaciones y no deben utilizarse como sustituto de la realización de un estudio de impacto económico personalizado para su comunidad.</p>
          <p><span className="font-bold">Este modelo fue preparado por el Centro de Economía Creativa a partir de los resultados de la 3ra Encuesta de Consumo y Participación Cultural en Puerto Rico.</span></p>
        </article>
      </div>
    </div>
  )
}

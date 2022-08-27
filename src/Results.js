const formulas = {
  otherDirectCosts: (ticketCost) => (ticketCost * 0.17005 + 19.79695),
  indirectCosts: (ticketCost) => (ticketCost * 0.115 + 40),
  totalCost: (ticketCost) => (ticketCost * 1.28463 + 61.46096),
  eventTotal: (costs, attendees) => (costs * attendees / 2),
  ivu: (totalEventCosts) => (totalEventCosts * 0.115),
}

export default function Results(props) {
  const tableItems = [
    { concept: 'Otros gastos directos:', 
      perPerson: formulas.otherDirectCosts(props.values.ticketCost).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      eventTotal: formulas.eventTotal(formulas.otherDirectCosts(props.values.ticketCost),props.values.attendees).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      ivu: formulas.ivu(formulas.eventTotal(formulas.otherDirectCosts(props.values.ticketCost),props.values.attendees)).toLocaleString("en-US", { style: "currency", currency: "USD"})},
    { concept: 'Gastos indirectos:', 
      perPerson: formulas.indirectCosts(props.values.ticketCost).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      eventTotal: formulas.eventTotal(formulas.indirectCosts(props.values.ticketCost),props.values.attendees).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      ivu: formulas.ivu(formulas.eventTotal(formulas.indirectCosts(props.values.ticketCost),props.values.attendees)).toLocaleString("en-US", { style: "currency", currency: "USD"}) },
    { concept: 'Gasto total:', 
      perPerson: formulas.totalCost(props.values.ticketCost).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      eventTotal: formulas.eventTotal(formulas.totalCost(props.values.ticketCost),props.values.attendees).toLocaleString("en-US", { style: "currency", currency: "USD"}), 
      ivu: formulas.ivu(formulas.eventTotal(formulas.totalCost(props.values.ticketCost),props.values.attendees)).toLocaleString("en-US", { style: "currency", currency: "USD"})},
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      concepto
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      por persona
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      por evento
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      IVU
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableItems.map((item) => (
                    <tr key={item.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {item.concept}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.perPerson}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.eventTotal}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.ivu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-4">
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
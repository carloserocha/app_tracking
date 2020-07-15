let Packages = [
    {
        storeId: 'sandbox',
        trackingId: '10000001',
        events: [
            {
                event_date: '2020-07-15T01:14:55.427Z',
                event_message: 'Objeto encaminhado de País em HONG KONG / para País em Unidade de Tratamento Internacional / BR'
            },
            {
                event_date: '2020-07-15T01:05:55.427Z',
                event_message: 'Objeto Postado'
            }
        ]
    },
    {
        storeId: 'sandbox',
        trackingId: '10000002'
    }
]

module.exports = {
    Query: {    
        /*package: () => {

        }*/
        package: (param, { storeId, trackingId }) => {
            return Packages.find(i => i.storeId === storeId && i.trackingId === trackingId)
        }
    },
    Mutation: {
        createPackage: (param, { storeId, trackingId }) => {
            Packages.push({
                storeId,
                trackingId
            })
        }
    }
}
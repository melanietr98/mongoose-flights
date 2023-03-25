import React from 'react'
import DefaultLayout from './layout/DefaultLayout'
import Navbar from './layout/Navbar'
function Index(props) {
    return (
        <DefaultLayout>
            <>
            <Navbar />
            <div>
                <h1>Index View</h1>
                <div id="flights">

                        {
                            props.flights.map((flight, index) => {
                               let date = new Date()
                               let style = date > flight.departs ? {color: 'red', textDecoration:'none'} : {color: 'black', textDecoration:'none'}
                                
                               return (<div  key={index}>
                                    <div style={{display: 'flex', padding: "10px"}}>
                                        <div style={style}>{flight.airline}{' | '}{flight.flights} {' | '}{flight.departs.toString()}</div>
                                        <a href={`/flights/${flight._id}`}>Details</a>
                                    </div>
                                </div>
                                )
                            }
                            )
                        }
            
                    <form action="/flights/new">
                            <button>NEW FLIGHT</button>
                    </form>

                    <form action="/flights/clear?_method=DELETE" method='POST'>
                        <button>Clear</button>
                    </form>

                </div>
            </div>
        </>
        </DefaultLayout>
    )
}

export default Index
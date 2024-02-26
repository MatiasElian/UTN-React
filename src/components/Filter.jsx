import "./Filter.css"


const Filter = ({filterCharacters}) => {


  return (
    <section className='sectionFilter'>
        <div className='divMainFilter'>
            <h2>Filters</h2>
            <div className='filterContainer'>
                <div className='filter'>
                    <input type="checkbox" role='switch' value='Alive' onClick={(event)=>filterCharacters(event.target)}/>
                    <label htmlFor="">Character Alive</label>
                </div>
                <div className='filter'>
                    <input type="checkbox" role='switch' value='Dead' onClick={(event)=>filterCharacters(event.target)}/>
                    <label htmlFor="">Character Dead</label>
                </div>
                <div className='filter'>
                    <input type="checkbox" role='switch' value='Female' onClick={(event)=>filterCharacters(event.target)}/>
                    <label htmlFor="">Female</label>
                </div>
                <div className='filter'>
                    <input type="checkbox" role='switch' value='Male' onClick={(event)=>filterCharacters(event.target)}/>
                    <label htmlFor="">Male</label>
                </div>
                <div className='filter'>
                    <input type="checkbox" role='switch' value='Unknown' onClick={(event)=>filterCharacters(event.target)}/>
                    <label htmlFor="">Origin Unknown</label>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Filter

import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage, SearchPage } from '../pages'
import { HeroPage } from '../pages/HeroPage'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="container mt-2">
            <Routes>
                <Route path="marvel" element= {<MarvelPage></MarvelPage>}></Route>
                <Route path="dc" element={<DcPage></DcPage>}></Route>
                
                <Route path="search" element={<SearchPage></SearchPage>}></Route>
                <Route path="hero/:heroId" element={<HeroPage></HeroPage>}></Route>

                <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
                {/*Search, by id */}
            </Routes>
        </div>
    </>
  )
}

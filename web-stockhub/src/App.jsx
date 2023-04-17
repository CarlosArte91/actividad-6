import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/homePage"
import ViewInventoryPage from "./pages/view_inventory/viewInventoryPage"
import CreateProduct from "./pages/create_product/createProduct"
import InOutProduct from "./pages/in_out_product/inOutProduct"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view_inventory" element={<ViewInventoryPage />} />
        <Route path="/create_product" element={<CreateProduct />} />
        <Route path="/in_out_product" element={<InOutProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

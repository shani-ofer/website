/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Layout from '../components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "@/src/pages/Homepage";
import { IndividualsPage } from "@/src/pages/IndividualsPage";
import { CompaniesPage } from "@/src/pages/CompaniesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="coaching" element={<IndividualsPage />} />
          <Route path="management" element={<CompaniesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/src/components/Layout";
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

import React from "react";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Selection,
  Page,
  Sort,
  Filter,
  Toolbar,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return(
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={["Search", "Add", "Edit", "Delete", "Update", "Cancel"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        pageSettings={{ pageCount: 5 }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Selection, Page, Sort, Filter, Toolbar, Edit]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;

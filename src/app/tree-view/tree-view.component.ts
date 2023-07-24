import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DepartmentInterface, DepartmentClass } from '../Department'; 
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  rootNodes: DepartmentClass[] = [];
  departments: DepartmentInterface[] = [];

  constructor(private service: AuthService) {
      //this.dataSource.data = this.hierarchicalData;
  }


  /* Changes the Flat JSON Server data to Nested JSON server data  */
  ngOnInit() {
    this.service.GetAll().subscribe((res) => {
    this.dataSource.data = this.buildTree("null", res);
    });
  }

  buildTree(parentId: string, nodes: any[]): any[] {
    const children = [];
    
    for (const node of nodes) {
      if (node.managerId == parentId) {
        const childrenNodes = this.buildTree(node.deptId, nodes);
        if (childrenNodes.length > 0) {
          node.children = childrenNodes;
        }
        children.push(node);
      }
    }
    //console.log(children);
    return children;
  }

  /* Flat Tree Structure Using Angular Material */

  private _transformer = (node: DepartmentInterface, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.deptName,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
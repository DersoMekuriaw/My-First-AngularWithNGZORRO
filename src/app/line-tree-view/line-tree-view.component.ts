
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

import { AuthService } from '../service/auth.service';
import { DepartmentInterface, DepartmentClass } from '../Department';

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-line-tree-view',
  templateUrl: './line-tree-view.component.html',
  styleUrls: ['./line-tree-view.component.css']
})

export class LineTreeViewComponent {
  private transformer = (node: DepartmentClass, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.deptName,
    level
  });

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  showLeafIcon = false;
  rootNodes: DepartmentClass[] = [];
  departments: DepartmentClass[] = [];

  constructor(private service: AuthService) {
    this.service.GetAll().subscribe((res) => {
    this.dataSource.setData(this.buildTree("null", res));
    this.treeControl.expandAll();
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
    return children;
  }

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  getNode(name: string): FlatNode | null {
    return this.treeControl.dataNodes.find(n => n.name == name) || null;
  }
}

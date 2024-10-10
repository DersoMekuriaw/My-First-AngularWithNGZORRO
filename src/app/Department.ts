export interface DepartmentInterface{
    id?:number;
    deptId: string; 
    deptName: string;
    deptDesc: string;
    managerId: string;
    children?: [];
}

export class DepartmentClass {
    id?:number;
    deptId: string; 
    deptName: string;
    deptDesc: string;
    managerId: string;
    children: DepartmentClass[] = [];
    
      constructor(depart: any) {
        this.id = depart.id;
        this.deptId = depart.deptId;
        this.deptName = depart.deptName;
        this.deptDesc = depart.deptDesc;
        this.managerId = depart.managerId;
      }
    }
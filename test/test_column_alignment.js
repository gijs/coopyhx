var coopy = require('coopy');
var coopy_view = require('coopy_view');
var tester = require('tester');

{
    var t1 = new coopy_view.CoopyTableView([
	["Year","Number"],
	[2009,0],
	[2011,4],
	[2012,""]
    ]);
    var t2 = new coopy_view.CoopyTableView([
	["Year","Number","More"],
	[2009,0,20],
	[2011,4,30],
	[2019,"",40],
    ]);
    
    var ct = new coopy.Coopy.compareTables(t1,t2);
    var align = ct.align();
    tester.order_asserts(align.meta.toOrder(),
			 [[0,0],[1,1],[-1,2]]);
    tester.order_asserts(align.toOrder(),
			 [[0,0],[1,1],[2,2],[-1,3],[3,-1]]);
}

{
    var t1 = new coopy_view.CoopyTableView([
	["Year","Number","More"],
	[2009,0,20],
	[2011,4,30],
	[2019,"",40],
    ]);
    var t2 = new coopy_view.CoopyTableView([
	["Year","Number"],
	[2009,0],
	[2011,4],
	[2012,""]
    ]);
    
    var ct = new coopy.Coopy.compareTables(t1,t2);
    var align = ct.align();
    tester.order_asserts(align.meta.toOrder(),
			 [[0,0],[1,1],[2,-1]]);
    tester.order_asserts(align.toOrder(),
			 [[0,0],[1,1],[2,2],[-1,3],[3,-1]]);
}



{
    var t1 = new coopy_view.CoopyTableView([
	["Number","More","Year"],
	[0,20,2009],
	[4,30,2011],
	["",40,2019],
    ]);
    var t2 = new coopy_view.CoopyTableView([
	["Year","Number"],
	[2009,0],
	[2011,4],
	[2012,""]
    ]);
    
    var ct = new coopy.Coopy.compareTables(t1,t2);
    var align = ct.align();
    tester.order_asserts(align.meta.toOrder(),
		  [[2,0],[0,1],[1,-1]]);
    tester.order_asserts(align.toOrder(),
			 [[0,0],[1,1],[2,2],[-1,3],[3,-1]]);
}


{
    var t1 = new coopy_view.CoopyTableView([
	["Number","More","Year"],
	[0,20,2009],
	[4,30,2011],
	["",40,2019],
    ]);
    var t2 = new coopy_view.CoopyTableView([
	["Number","Less","Year"],
	[0,20,2009],
	[4,30,2011],
	["",40,2019],
    ]);
    
    var ct = new coopy.Coopy.compareTables(t1,t2);
    var align = ct.align();
    tester.order_asserts(align.meta.toOrder(),
			 [[0,0],[1,1],[2,2]]);
}



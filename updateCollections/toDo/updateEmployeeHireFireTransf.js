var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var async = require('async');
var _ = require('lodash');

require('../../models/index.js');

var employeeSchema = new mongoose.Schema({
    isEmployee: {type: Boolean, default: false},
    imageSrc: {
        type: String,
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAAEaElEQVRYw82X6XLbNhCA+f4PVomk5MRyHDtp63oEgDcl3vfRBQhQIEVKSvsnO+OxRBEfFnthV+n/pyi/NaCryzzL8rJu/wOgzQPXJBgjhDExnXPW/Aqgy30DI0yIwYQQ4Bhe2j0I6BIbI1jL9meC2TdkRu0jgMxCGN5H2HT8IIzjKPAdE9NngEjuAhqfv3rOpe3aIrDAFoB1qtuA3ADlMXKuz9vlLqZokt4CxPAOQXa2bPDCRVSJYB0QIDA4ibp+TVKDbuCvAeh6YpX9DWkcUGJCkAARXW9UfXeL0PmUcF4CZBA4cALv5nqQM+yD4mtATQMOGMi9RzghiKriCuBiAzsB1e8uwUUGtroZIAEsqfqHCI2JjdGZHNDSZzHYb0boQK4JOTVXNQFEoJXDPskEvrYTrJHgIwOdZEBrggXzfkbo+sY7Hp0Fx9bUYbUEAAtgV/waHAcCnOew3arbLy5lVXGSXIrKGQkrKKMLcnHsPjEGAla1PYi+/YCV37e7DRp1qUDjwREK1wjbo56hezRoPLxt9lzUg+m96Hvtz3BMcU9syQAxKBSJ/c2Nqv0Em5C/97q+BdGoEuoORN98CkAqzsAAPh690vdv2tOOEcx/dodP0zq+qjpoQQF7/Vno2UA0OgLQQbUZI6t/1+BlRgAlyywvqtNXja0HFQ7jGVwoUA0HUBNcMvRdpW8PpzDPYRAERfmNE/TDuE8Ajis4oJAiUwB2+g+am3YEEmT5kz4HgOdRygHUIPEMsFf/YvXJYoSKbPczQI4HwysSbKKBdk4dLAhJsptrUHK1lSERUDYD6E9pGLsjoXzRZgAIJVaYBCCfA57zMBoJYfV9CXDigHhRgww2Hgngh4UjnCUbJAs2CEdCkl25kbou5ABh0KkXPupA6IB8fOUF4TpFOs5Eg50eFSOBfOz0GYCWoJwDoJzwcjQBfM2rMAjD0CEsL/Qp4ISG/FHkuJ4A9toXv66KomosMMNAuAA6GxOWPwqP64sb3kTm7HX1Fbsued9BXjACZKNIphLz/FF4WIps6vqff+jaIFAONiBbTf1hDITti5RLg+cYoDOxqJFwxb0dXmT5Bn/Pn8wOh9dQnMASK4aaSGuk+G24DObCbm5XzkXs9RdASTuytUZO6Czdm2BCA2cSgNbIWedxk0AV4FVYEYFJpLK4SuA3DrsceQEQl6svXy33CKfxIrwAanqZBA8R4AAQWeUMwJ6CZ7t7BIh6utfos0uLwxqP7BECMaTUuQCoawhO+9sSUWtjs1kA9I1Fm8DoNiCl64nUCsp9Ym1SgncjoLoz7YTl9dNOtbGRYSAjWbMDNPKw3py0otNeufVYN2wvzha5g6iGzlTDebsfEdbtW9EsLOvYZs06Dmbsq4GjcoeBgThBWtRN2zZ1mYUuGZ7axfz9hZEns+mMQ+ckzIYm/gn+WQvWWRq6uoxuSNi4RWWAYGfRuCtjXx25Bh25MGaTFzaccCVX1wfPtkiCk+e6nh/ExXps/N6z80PyL8wPTYgPwzDiAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTAxLTE5VDAzOjU5OjAwKzAxOjAwaFry6QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0xMi0yMVQxNDozMDo0NCswMTowMGxOe/8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC'
    },
    subject: {type: String, default: ''},
    name: {
        first: {type: String, default: ''},
        last: {type: String, default: ''}
    },
    tags: {type: Array, default: []},
    workAddress: {
        street: {type: String, default: ''},
        city: {type: String, default: ''},
        state: {type: String, default: ''},
        zip: {type: String, default: ''},
        country: {type: String, default: ''}
    },
    workEmail: {type: String, default: ''},
    personalEmail: {type: String, default: ''},
    workPhones: {
        mobile: {type: String, default: ''},
        phone: {type: String, default: ''}
    },
    skype: {type: String, default: ''},
    officeLocation: {type: String, default: ''},
    relatedUser: {type: ObjectId, ref: 'Users', default: null},
    visibility: {type: String, default: 'Public'},
    department: {type: ObjectId, ref: 'Department', default: null},
    jobPosition: {type: ObjectId, ref: 'JobPosition', default: null},
    manager: {type: ObjectId, ref: 'Employees', default: null},
    coach: {type: ObjectId, ref: 'Employees', default: null},
    nationality: {type: String, default: ''},
    identNo: String,
    passportNo: String,
    bankAccountNo: {type: String, default: ''},
    otherId: {type: String, default: ''},
    homeAddress: {
        street: {type: String, default: ''},
        city: {type: String, default: ''},
        state: {type: String, default: ''},
        zip: {type: String, default: ''},
        country: {type: String, default: ''}
    },
    dateBirth: Date,
    age: {type: Number, default: 0},
    daysForBirth: Number,
    nextAction: Date,
    source: {type: String, default: ''},
    referredBy: {type: String, default: ''},
    active: {type: Boolean, default: true},
    workflow: {type: ObjectId, ref: 'workflows', default: null},
    whoCanRW: {type: String, enum: ['owner', 'group', 'everyOne'], default: 'everyOne'},
    groups: {
        owner: {type: ObjectId, ref: 'Users', default: null},
        users: [{type: ObjectId, ref: 'Users', default: null}],
        group: [{type: ObjectId, ref: 'Department', default: null}]
    },
    otherInfo: {type: String, default: ''},
    expectedSalary: Number,
    proposedSalary: Number,
    color: {type: String, default: '#4d5a75'},
    creationDate: {type: Date, default: Date.now},
    createdBy: {
        user: {type: ObjectId, ref: 'Users', default: null},
        date: {type: Date, default: Date.now}
    },
    editedBy: {
        user: {type: ObjectId, ref: 'Users', default: null},
        date: {type: Date, default: Date.now}
    },
    attachments: {type: Array, default: []},
    contractEnd: {
        reason: {type: String, default: ''},
        date: {type: Date, default: Date.now}
    },
    marital: {type: String, enum: ['married', 'unmarried'], default: 'unmarried'},
    gender: {type: String, enum: ['male', 'female'], default: 'male'},
    jobType: {type: String, default: ''},
    sequence: {type: Number, default: 0},
    isLead: Number,
    ID: Number,
    social: {
        FB: {type: String, default: ''},
        LI: {type: String, default: ''},
        GP: {type: String, default: ''}
    },
    hire: [{
        _id: false,
        date: Date,
        department: {type: ObjectId, ref: 'Department', default: null},
        jobPosition: {type: ObjectId, ref: 'JobPosition', default: null}
    }],
    fire: [{
        _id: false,
        date: Date,
        department: {type: ObjectId, ref: 'Department', default: null},
        jobPosition: {type: ObjectId, ref: 'JobPosition', default: null}
    }],
    status: {type: String, default: 'updated'},
    lastFire: {type: Number, default: null},
    transferred: [JSON]
}, {collection: 'Employees'});

employeeSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
});

employeeSchema.set('toJSON', {virtuals: true});

mongoose.model('EmployeesOld', employeeSchema);

if (!mongoose.Schemas) {
    mongoose.Schemas = {};
}

mongoose.Schemas['EmployeeOld'] = employeeSchema;

var EmployeeSchema = mongoose.Schemas['Employee'];
var EmployeeSchemaOld = mongoose.Schemas['EmployeeOld'];
var DepartmentSchema = mongoose.Schemas['Department'];
var connectOptions = {
    user  : 'easyerp',
    pass  : '1q2w3e!@#',
    w     : 1,
    j     : true
};

var dbObject = mongoose.createConnection('144.76.56.111', 'sergey', 28017, connectOptions);

dbObject.on('error', console.error.bind(console, 'connection error:'));
dbObject.once('open', function callback() {
    console.log("Connection to production is success");
});

var Employee = dbObject.model("Employees", EmployeeSchema);
var Department = dbObject.model("Department", DepartmentSchema);
var EmployeeOld = dbObject.model("EmployeesOld", EmployeeSchemaOld);

var query = EmployeeOld.find().lean();

query.exec(function (error, _res) {
    if (error) {
        return console.dir(error);
    }

    Department.aggregate([
        {
            $match: {
                parentDepartment: {$ne: null}
            }
        },
        {
            $group: {
                _id: '$parentDepartment',
                sublingDeps: {$push: '$_id'}
            }
        }
    ], function (error, deps) {
        if (error) {
            return console.dir(error);
        }

        var adminDeps = deps[0]._id.toString === ObjectId('56e6775c5ec71b00429745a4') ? deps[0].sublingDeps : deps[1].sublingDeps;

        adminDeps = adminDeps.map(function(depId) {
            return depId.toString();
        });

        async.eachLimit(_res, 50, function (emp, callback) {
            var objectToSave;
            var hire;
            var event;
            var fire = [];
            var transfer;
            var fired = (emp.hire.length === emp.fire.length);

            emp.hire = emp.hire.map(function(hireObj) {
                "use strict";
                hireObj.status = "updated";
                return hireObj;
            });

            hire = [emp.hire[0].date];
            transfer = emp.hire;

            transfer[0].status = "hired";

            if (fired) {
                event = emp.fire.pop();
                event.status = "fired";
                fire = [event.date];
                transfer.push(event);

            }

            if (emp._id.toString() === '55b92ad221e4b7c40f000034') {
                transfer.splice(1, 0, emp.fire[0]);
                transfer[1].status = "fired";
                transfer[2].status = "hired";
                fire.push(transfer[1].date);
                hire.push(transfer[2].date);
            }

            transfer = transfer.map(function(tr) {
                if (adminDeps.indexOf(tr.department.toString()) !== -1 ) {
                    tr.isDeveloper = false;
                } else {
                    tr.isDeveloper = true;
                }

                return tr;
            });

            objectToSave = {
                hire    : hire,
                fire    : fire,
                transfer: transfer
            };

            Employee.update({_id: emp._id}, objectToSave, callback);
            //callback();
        }, function (err) {
            if (err) {
                return console.dir(err);
            }

            console.dir('Good');
        });
    });
});
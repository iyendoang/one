(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(self, function () {
  return (function () {
    // webpackBootstrap
    var __webpack_modules__ = {
      /***/ "./resources/js/users/users.js":
        /*!*************************************!*\
  !*** ./resources/js/users/users.js ***!
  \*************************************/
        /***/ function (module, exports, __webpack_require__) {
          /* module decorator */ module = __webpack_require__.nmd(module);
          var __WEBPACK_AMD_DEFINE_FACTORY__,
            __WEBPACK_AMD_DEFINE_ARRAY__,
            __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(o) {
            "@babel/helpers - typeof";
            return (
              (_typeof =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (o) {
                      return typeof o;
                    }
                  : function (o) {
                      return o &&
                        "function" == typeof Symbol &&
                        o.constructor === Symbol &&
                        o !== Symbol.prototype
                        ? "symbol"
                        : typeof o;
                    }),
              _typeof(o)
            );
          }
          (function webpackUniversalModuleDefinition(root, factory) {
            if (
              (false ? 0 : _typeof(exports)) === "object" &&
              (false ? 0 : _typeof(module)) === "object"
            )
              module.exports = factory();
            else if (true)
              !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                      exports,
                      __WEBPACK_AMD_DEFINE_ARRAY__
                    )
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            else {
              var i, a;
            }
          })(self, function () {
            return (function () {
              // webpackBootstrap

              "use strict";

              var __nested_webpack_exports__ = {};

              // Datatable (jquery)
              $(function () {
                // Variable declaration for table
                var dt_user_table = $(".datatables-users"),
                  select2 = $(".select2"),
                  userView = baseUrl + "app/user/view/account",
                  offCanvasForm = $("#modelUsersMasters");
                if (select2.length) {
                  var $this = select2;
                  $this.wrap('<div class="position-relative"></div>').select2({
                    placeholder: "Select Country",
                    dropdownParent: $this.parent(),
                  });
                }

                // ajax setup
                $.ajaxSetup({
                  headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                      "content"
                    ),
                  },
                });

                // Users datatable
                if (dt_user_table.length) {
                  var dt_user = dt_user_table.DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: {
                      url: baseUrl + "users-list",
                    },
                    columns: [
                      {
                        data: "",
                      },
                      {
                        data: "id",
                      },
                      {
                        data: "name",
                      },
                      {
                        data: "email",
                      },
                      {
                        data: "role",
                      },
                      {
                        data: "email_verified_at",
                      },
                      {
                        data: "action",
                      },
                    ],
                    columnDefs: [
                      {
                        // For Responsive
                        className: "control",
                        searchable: false,
                        orderable: false,
                        responsivePriority: 2,
                        targets: 0,
                        render: function render(data, type, full, meta) {
                          return "";
                        },
                      },
                      {
                        searchable: false,
                        orderable: false,
                        targets: 1,
                        render: function render(data, type, full, meta) {
                          return "<span>".concat(full.fake_id, "</span>");
                        },
                      },
                      {
                        // User full name
                        targets: 2,
                        responsivePriority: 4,
                        render: function render(data, type, full, meta) {
                          var $name = full["name"];

                          // For Avatar badge
                          var stateNum = Math.floor(Math.random() * 6);
                          var states = [
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "dark",
                            "primary",
                            "secondary",
                          ];
                          var $state = states[stateNum],
                            $name = full["name"],
                            $initials = $name.match(/\b\w/g) || [],
                            $output;
                          $initials = (
                            ($initials.shift() || "") + ($initials.pop() || "")
                          ).toUpperCase();
                          $output =
                            '<span class="avatar-initial rounded-circle bg-label-' +
                            $state +
                            '">' +
                            $initials +
                            "</span>";

                          // Creates full output for row
                          var $row_output =
                            '<div class="d-flex justify-content-start align-items-center user-name">' +
                            '<div class="avatar-wrapper">' +
                            '<div class="avatar avatar-sm me-3">' +
                            $output +
                            "</div>" +
                            "</div>" +
                            '<div class="d-flex flex-column">' +
                            '<a href="' +
                            userView +
                            '" class="text-body text-truncate"><span class="fw-medium">' +
                            $name +
                            "</span></a>" +
                            "</div>" +
                            "</div>";
                          return $row_output;
                        },
                      },
                      {
                        // User email
                        targets: 3,
                        render: function render(data, type, full, meta) {
                          var $email = full["email"];
                          return (
                            '<span class="user-email">' + $email + "</span>"
                          );
                        },
                      },
                      {
                        // User role
                        targets: 4,
                        render: function render(data, type, full, meta) {
                          var $role = full["role"];
                          return '<span class="user-role">' + $role + "</span>";
                        },
                      },
                      {
                        // email verify
                        targets: 5,
                        className: "text-center",
                        render: function render(data, type, full, meta) {
                          var $verified = full["email_verified_at"];
                          return "".concat(
                            $verified
                              ? '<i class="bx fs-4 bx-check-shield text-success"></i>'
                              : '<i class="bx fs-4 bx-shield-x text-danger" ></i>'
                          );
                        },
                      },
                      {
                        // Actions
                        targets: -1,
                        title: "Actions",
                        searchable: false,
                        orderable: false,
                        render: function render(data, type, full, meta) {
                          return (
                            '<div class="d-inline-block text-nowrap">' +
                            '<button class="btn btn-sm btn-icon edit-record" data-id="'.concat(
                              full["id"],
                              '" data-bs-toggle="offcanvas" data-bs-target="#modelUsersMasters"><i class="bx bx-edit"></i></button>'
                            ) +
                            '<button class="btn btn-sm btn-icon delete-record" data-id="'.concat(
                              full["id"],
                              '"><i class="bx bx-trash"></i></button>'
                            ) +
                            '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>' +
                            '<div class="dropdown-menu dropdown-menu-end m-0">' +
                            '<a href="' +
                            userView +
                            '" class="dropdown-item">View</a>' +
                            '<a href="javascript:;" class="dropdown-item">Suspend</a>' +
                            "</div>" +
                            "</div>"
                          );
                        },
                      },
                    ],
                    order: [[2, "desc"]],
                    dom:
                      '<"row mx-2"' +
                      '<"col-md-2"<"me-3"l>>' +
                      '<"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>' +
                      ">t" +
                      '<"row mx-2"' +
                      '<"col-sm-12 col-md-6"i>' +
                      '<"col-sm-12 col-md-6"p>' +
                      ">",
                    language: {
                      sLengthMenu: "_MENU_",
                      search: "",
                      searchPlaceholder: "Search..",
                    },
                    // Buttons with Dropdown
                    buttons: [
                      {
                        text:
                          '<i class="bx bx-plus me-0 me-sm-2"></i><span class="d-none d-sm-inline-block">Import</span>',
                        className: "add-new btn btn-secondary mx-2",
                        attr: {
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#importModalUsers",
                        },
                      },
                      {
                        text:
                          '<i class="bx bx-plus me-0 me-sm-2"></i><span class="d-none d-sm-inline-block">Tambah</span>',
                        className: "add-new btn btn-primary",
                        attr: {
                          "data-bs-toggle": "offcanvas",
                          "data-bs-target": "#modelUsersMasters",
                        },
                      },
                    ],
                    // For responsive popup
                    responsive: {
                      details: {
                        display: $.fn.dataTable.Responsive.display.modal({
                          header: function header(row) {
                            var data = row.data();
                            return "Details of " + data["name"];
                          },
                        }),
                        type: "column",
                        renderer: function renderer(api, rowIdx, columns) {
                          var data = $.map(columns, function (col, i) {
                            return col.title !== "" // ? Do not show row in modal popup if title is blank (for check box)
                              ? '<tr data-dt-row="' +
                                  col.rowIndex +
                                  '" data-dt-column="' +
                                  col.columnIndex +
                                  '">' +
                                  "<td>" +
                                  col.title +
                                  ":" +
                                  "</td> " +
                                  "<td>" +
                                  col.data +
                                  "</td>" +
                                  "</tr>"
                              : "";
                          }).join("");
                          return data
                            ? $('<table class="table"/><tbody />').append(data)
                            : false;
                        },
                      },
                    },
                  });
                }

                // Delete Record
                $(document).on("click", ".delete-record", function () {
                  var user_id = $(this).data("id"),
                    dtrModal = $(".dtr-bs-modal.show");

                  // hide responsive modal in small screen
                  if (dtrModal.length) {
                    dtrModal.modal("hide");
                  }

                  // sweetalert for confirmation of delete
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    customClass: {
                      confirmButton: "btn btn-primary me-3",
                      cancelButton: "btn btn-label-secondary",
                    },
                    buttonsStyling: false,
                  }).then(function (result) {
                    if (result.value) {
                      // delete the data
                      $.ajax({
                        type: "DELETE",
                        url: "".concat(baseUrl, "users-list/").concat(user_id),
                        success: function success() {
                          dt_user.draw();
                        },
                        error: function error(_error) {
                          console.log(_error);
                        },
                      });

                      // success sweetalert
                      Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: "The user has been deleted!",
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                      });
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      Swal.fire({
                        title: "Cancelled",
                        text: "The User is not deleted!",
                        icon: "error",
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                      });
                    }
                  });
                });

                // edit record
                $(document).on("click", ".edit-record", function () {
                  var user_id = $(this).data("id"),
                    dtrModal = $(".dtr-bs-modal.show");

                  // hide responsive modal in small screen
                  if (dtrModal.length) {
                    dtrModal.modal("hide");
                  }

                  // changing the title of offcanvas
                  $("#modelUsersMastersLabel").html("Edit User");

                  // get data
                  $.get(
                    "".concat(baseUrl, "users-list/").concat(user_id, "/edit"),
                    function (data) {
                      $("#user_id").val(data.id);
                      $("#add-user-fullname").val(data.name);
                      $("#add-user-email").val(data.email);
                      $("#add-user-role").val(data.role);
                    }
                  );
                });

                // changing the title
                $(".add-new").on("click", function () {
                  $("#user_id").val(""); //reseting input field
                  $("#modelUsersMastersLabel").html("Add User");
                });

                // Filter form control to default size
                // ? setTimeout used for multilingual table initialization
                setTimeout(function () {
                  $(".dataTables_filter .form-control").removeClass(
                    "form-control-sm"
                  );
                  $(".dataTables_length .form-select").removeClass(
                    "form-select-sm"
                  );
                }, 300);

                var addNewUserForm = document.getElementById("addNewUserForm");
                var submitButton = addNewUserForm.querySelector(".data-submit");
                var loadingSpinner = submitButton.querySelector(
                  ".spinner-border"
                );

                var fv = FormValidation.formValidation(addNewUserForm, {
                  fields: {
                    name: {
                      validators: {
                        notEmpty: {
                          message: "Please enter fullname",
                        },
                      },
                    },
                    email: {
                      validators: {
                        notEmpty: {
                          message: "Please enter your email",
                        },
                        emailAddress: {
                          message: "The value is not a valid email address",
                        },
                      },
                    },
                    role: {
                      validators: {
                        notEmpty: {
                          message: "Please enter your role",
                        },
                      },
                    },
                  },
                  plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                      eleValidClass: "",
                      rowSelector: function rowSelector(field, ele) {
                        return ".mb-3";
                      },
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    autoFocus: new FormValidation.plugins.AutoFocus(),
                  },
                }).on("core.form.valid", function () {
                  loadingSpinner.style.display = "inline-block";
                  submitButton.setAttribute("disabled", true);
                  $.ajax({
                    data: $("#addNewUserForm").serialize(),
                    url: "".concat(baseUrl, "users-list"),
                    type: "POST",
                    success: function success(status) {
                      dt_user.draw();
                      loadingSpinner.style.display = "none";
                      submitButton.removeAttribute("disabled");
                      offCanvasForm.offcanvas("hide");
                      Swal.fire({
                        icon: "success",
                        title: "Successfully ".concat(status, "!"),
                        text: "User ".concat(status, " Successfully."),
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                      });
                    },
                    error: function error(err) {
                      offCanvasForm.offcanvas("hide");
                      loadingSpinner.style.display = "none";
                      submitButton.removeAttribute("disabled");
                      Swal.fire({
                        title: "Duplicate Entry!",
                        text: "Your email should be unique.",
                        icon: "error",
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                      });
                    },
                  });
                });

                // clearing form data when offcanvas hidden
                offCanvasForm.on("hidden.bs.offcanvas", function () {
                  fv.resetForm(true);
                });
              });

              return __nested_webpack_exports__;
            })();
          });

          /***/
        },
    }; // The module cache
    var __webpack_module_cache__ = {}; // The require function

    function __webpack_require__(moduleId) {
      // Check if module is in cache
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== undefined) {
        return cachedModule.exports;
      } // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
        id: moduleId,
        loaded: false,
        exports: {},
      }); // Execute the module function

      __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded

      module.loaded = true; // Return the exports of the module

      return module.exports;
    } /* webpack/runtime/node module decorator */

    /************************************************************************/
    !(function () {
      __webpack_require__.nmd = function (module) {
        module.paths = [];
        if (!module.children) module.children = [];
        return module;
      };
    })(); // startup // Load entry module and return exports // This entry module is referenced by other modules so it can't be inlined

    /************************************************************************/

    var __webpack_exports__ = __webpack_require__(
      "./resources/js/users/users.js"
    );

    return __webpack_exports__;
  })();
});

<div class="offcanvas offcanvas-end" tabindex="-1" id="modelUsersMasters" aria-labelledby="modelUsersMastersLabel">
    <div class="offcanvas-header">
        <h5 id="modelUsersMastersLabel" class="offcanvas-title">Add User</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body mx-0 flex-grow-0">
        <form class="add-new-user pt-0" id="addNewUserForm">
            <input type="hidden" name="id" id="user_id">
            <div class="mb-3">
                <label class="form-label" for="add-user-fullname">Full Name</label>
                <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe" name="name"
                    aria-label="John Doe" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="add-user-email">Email</label>
                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com"
                    aria-label="john.doe@example.com" name="email" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="add-user-role">User Role</label>
                <select id="add-user-role" name="role" class="form-select select2">
                    <option class="text-capitalize" value="">Pilih Role</option>
                    <option class="text-capitalize" value="superadmin">superadmin</option>
                    <option class="text-capitalize" value="admin">admin</option>
                    <option class="text-capitalize" value="operator">operator</option>
                    <option class="text-capitalize" value="kepsek">kepsek</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">
                <span class="spinner-border me-1" role="status" aria-hidden="true" style="display: none;"></span>
                Submit
            </button>
            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
        </form>
    </div>
</div>

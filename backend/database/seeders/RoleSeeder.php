<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        Permission::create(['name' => 'asset.create']);
        Permission::create(['name' => 'asset.read']);
        Permission::create(['name' => 'asset.update']);
        Permission::create(['name' => 'asset.delete']);

        $admin = Role::create(['name' => 'admin']);
        $staff = Role::create(['name' => 'staff']);
        //

        $admin->givePermissionTo(Permission::all());
        $staff->givePermissionTo(['asset.read']);
    }
}

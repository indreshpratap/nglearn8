const menu = {
    admin: [
        { label: 'Dashboard', link: '/admin/dashboard' },
        { label: 'Users', link: '/admin/users' },
        { label: 'New User', link: '/admin/user-registration' },
        { label: 'Courses', link: '/admin/courses' },
        { label: 'Chapters', link: '/admin/chapters' },
        { label: 'New Batch', link: '/admin/new-batch' }
        
    ],

    user: [
        { label: 'Admin Dashboard', link: '/admin' },
        { label: 'Admin Users', link: '/admin/users' },
        { label: 'Admin New User', link: '/admin/user-registration' },
        { label: 'Dashboard', link: '/student/dashboard' },
        { label: 'Account', link: '/student/account' },
        { label: 'Courses', link: '/student/courses' },
        { label: 'Chapter 1', link: '/student/chapter/1' },
        { label: 'Chapter 2', link: '/student/chapter/2' },
        { label: 'Chapter 3', link: '/student/chapter/3' },
        { label: 'Chapter 4', link: '/student/chapter/4' },
    ]
};

export function getAdminMenu() {
    return menu.admin;
}

export function getUserMenu() {
    return menu.user;
}
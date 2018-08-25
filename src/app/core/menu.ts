const menu = {
    admin: [
        { label: 'Dashboard', link: '/admin/dashboard' },
        { label: 'New User', link: '/admin/user-registration' },
        { label: 'Course', link: '/admin/course' },
        { label: 'Chapters', link: '/admin/chapters' },
        { label: 'Batch', link: '/admin/batch' }
    ],

    user: [
        { label: 'Dashboard', link: '/user/dashboard' },
        { label: 'Account', link: '/user/account' },
        { label: 'Courses', link: '/user/courses' },
    ]
};

export function getAdminMenu() {
    return menu.admin;
}

export function getUserMenu() {
    return menu.user;
}
export enum WellKnownRoles {
    admin = 'admin',
    basic = 'basic', // Донор, прошедший только базовую регистрацию
    donor = 'donor', // Просто донор, вообще без ролей
    weight = 'weight', // Нормальный вес для сдачи в экспо
    resident = 'resident', // Регистрация в Питере от полугода
    citizen = 'citizen', // Гражданин России от года
    budget = 'budget' // Бюджетной формы обучения
}

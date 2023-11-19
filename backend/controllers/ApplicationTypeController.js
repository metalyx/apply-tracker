import ApplicationType from './models/ApplicationType.js';

class ApplicationTypeController {
    // Use just once, if there is no application types in the DB
    async createDefaultApplicationTypes(req, res) {
        try {
            const applicationTypes = [
                {
                    name: 'easy',
                },
                {
                    name: 'full',
                },
                {
                    name: 'genuine',
                },
            ];

            await ApplicationType.create(applicationTypes);

            res.status(200).json({
                message: 'Application types created successfully',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Application types creation failed',
            });
        }
    }
}

export default new ApplicationTypeController();

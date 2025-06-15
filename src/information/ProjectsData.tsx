import IProject from "../abstractions/interfaces/IProject";

const ProjectsData: IProject[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management and secure payment processing.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDMwNDVlIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNTAiIHJ4PSIxMCIgZmlsbD0iIzAwNzdiNiIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjIwIiBmaWxsPSIjMDBiNGQ4Ii8+CjxyZWN0IHg9IjE0MCIgeT0iODAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjOTBlMGVmIi8+CjxyZWN0IHg9IjE0MCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iI2NhZjBmOCIvPgo8L3N2Zz4K',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
        tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDA3N2I2Ii8+CjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxOTAiIHJ4PSI4IiBmaWxsPSIjMDBiNGQ4Ii8+CjxyZWN0IHg9IjE1MCIgeT0iMzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTkwIiByeD0iOCIgZmlsbD0iIzkwZTBlZiIvPgo8cmVjdCB4PSIyNzAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE5MCIgcng9IjgiIGZpbGw9IiNjYWYwZjgiLz4KPHJlY3QgeD0iNDAiIHk9IjUwIiB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjMDMwNDVlIi8+CjxyZWN0IHg9IjE2MCIgeT0iNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgcng9IjQiIGZpbGw9IiMwMzA0NWUiLz4KPHJlY3QgeD0iMjgwIiB5PSI1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiByeD0iNCIgZmlsbD0iIzAzMDQ1ZSIvPgo8L3N2Zz4K'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
        tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDA3N2I2Ii8+CjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxOTAiIHJ4PSI4IiBmaWxsPSIjMDBiNGQ4Ii8+CjxyZWN0IHg9IjE1MCIgeT0iMzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTkwIiByeD0iOCIgZmlsbD0iIzkwZTBlZiIvPgo8cmVjdCB4PSIyNzAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjE5MCIgcng9IjgiIGZpbGw9IiNjYWYwZjgiLz4KPHJlY3QgeD0iNDAiIHk9IjUwIiB3aWR0aD0iODAiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjMDMwNDVlIi8+CjxyZWN0IHg9IjE2MCIgeT0iNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgcng9IjQiIGZpbGw9IiMwMzA0NWUiLz4KPHJlY3QgeD0iMjgwIiB5PSI1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiByeD0iNCIgZmlsbD0iIzAzMDQ1ZSIvPgo8L3N2Zz4K'
    },
    {
        title: 'AI Dashboard',
        description: 'Analytics dashboard with machine learning insights, data visualization, and predictive analytics for business intelligence.',
        tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDBiNGQ4Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjOTBlMGVmIi8+CjxyZWN0IHg9IjIwMCIgeT0iMjAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTAwIiByeD0iOCIgZmlsbD0iI2NhZjBmOCIvPgo8cmVjdCB4PSIyMCIgeT0iMTQwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjgwIiByeD0iOCIgZmlsbD0iIzAzMDQ1ZSIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNSIgZmlsbD0iIzAwNzdiNiIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSI2MCIgcj0iMjAiIGZpbGw9IiMwMDc3YjYiLz4KPHBvbHlsaW5lIHBvaW50cz0iNTAsOTAgMTAwLDcwIDEzMCw5MCA3MCw1MCA5MCw4MCAyMCw2MCAiIHN0cm9rZT0iIzAzMDQ1ZSIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo='
    }
];

export default ProjectsData;
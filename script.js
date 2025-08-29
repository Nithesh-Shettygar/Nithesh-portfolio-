// IoT Portfolio - JavaScript Functionality

// Global variables
let mousePosition = { x: 0, y: 0 };
let gameState = {
    nodes: [],
    connections: [],
    selectedNode: null,
    gameCompleted: false,
    score: 0,
    attempts: 0
};

// Skills data
const skills = [
        { name: "Python", level: 85, category: "Programming", icon: "🐍" },
        { name: "C++", level: 70, category: "Programming", icon: "💻" },
        { name: "JavaScript", level: 75, category: "Programming", icon: "💻" },
        { name: "PHP", level: 55, category: "Programming", icon: "💻" },
        { name: "HTML/CSS", level: 80, category: "Web Development", icon: "💻" },
        { name: "React", level: 65, category: "Web Development", icon: "💻" },
        { name: "Bootstrap", level: 75, category: "Web Development", icon: "💻" },
        { name: "Flask", level: 70, category: "Web Development", icon: "💻" },
        { name: "UI/UX Design", level: 88, category: "Web Development", icon: "🔥" },
        { name: "Arduino", level: 95, category: "IoT & Embedded Systems", icon: "⚡" },
        { name: "ESP8266/ESP32", level: 85, category: "IoT & Embedded Systems", icon: "⚡" },
        { name: "Raspberry Pi", level: 70, category: "IoT & Embedded Systems", icon: "⚡" },
        { name: "Sensors", level: 90, category: "IoT & Embedded Systems", icon: "⚡" },
        { name: "MySQL", level: 65, category: "Databases", icon: "📶" },
        { name: "Firebase", level: 75, category: "Databases", icon: "📶" },
        { name: "MongoDB", level: 60, category: "Databases", icon: "📶" },
        { name: "ThingSpeak", level: 65, category: "Cloud", icon: "📶" },
        { name: "TensorFlow", level: 70, category: "Machine Learning & AI", icon: "📶" },
        { name: "OpenCV", level: 75, category: "Machine Learning & AI", icon: "📶" },
        { name: "Node-RED", level: 65, category: "Tools & Platforms", icon: "📶" },
        { name: "GitHub", level: 25, category: "Tools & Platforms", icon: "📶" },
        { name: "Figma", level: 70, category: "Design", icon: "🖥️" },
        { name: "Canva", level: 90, category: "Design", icon: "🖥️" },
        { name: "photoshop", level: 45, category: "Design", icon: "🖥️" },
];

// Projects data
const projects = [
    {
        id: 1,
        title: "IoT & ML -Based Smart Agriculture Monitoring and Control System",
        description: "Smart Agriculture Monitoring and Control System that integrates IoT-based environmental sensing, automated irrigation, and AI-powered computer vision to enhance crop productivity, optimize resource usage, and support data-driven farm management.",
        category: "Agriculture", 
        technologies: ["ESP8266", "OpenCV", "IoT", "IP cam"],
        status: "Completed",
        metrics: { },
        githubUrl: "https://github.com/Nithesh-Shettygar/agrivision"
    },

    {
        id: 2,
        title: "Node-RED Empowered AgTech: IoT Solutions for Farming Analytics",
        description: "The AgTech Car is a smart farming system with sensors and ML-powered analytics, using MQTT, Node-RED, and Google Sheets to provide real-time insights for efficient crop and soil management.",
        category: "Agriculture", 
        technologies: ["ESP8266", "Node-RED", "MQTT", "ESP CAM"],
        status: "Completed",
        metrics: { },
        githubUrl: "https://github.com/Nithesh-Shettygar/Node-RED-Empowered-AgTech-IoT-Solutions-for-Farming-Analytics"
    },


   
];

// Game nodes and connections
const gameNodes = [
    { id: 'sensor', type: 'sensor', label: 'Temperature Sensor', icon: '🌡️', position: { x: 100, y: 100 }, connected: false },
    { id: 'humidity', type: 'sensor', label: 'Humidity Sensor', icon: '💧', position: { x: 100, y: 200 }, connected: false },
    { id: 'microcontroller', type: 'controller', label: 'ESP32', icon: '🔧', position: { x: 300, y: 150 }, connected: false },
    { id: 'wifi', type: 'connectivity', label: 'WiFi Module', icon: '📶', position: { x: 500, y: 150 }, connected: false },
    { id: 'cloud', type: 'cloud', label: 'AWS IoT Core', icon: '☁️', position: { x: 700, y: 150 }, connected: false },
    { id: 'app', type: 'application', label: 'Mobile App', icon: '📱', position: { x: 700, y: 300 }, connected: false },
    { id: 'actuator', type: 'actuator', label: 'HVAC Control', icon: '❄️', position: { x: 300, y: 350 }, connected: false }
];

const correctConnections = [
    { from: 'sensor', to: 'microcontroller' },
    { from: 'humidity', to: 'microcontroller' },
    { from: 'microcontroller', to: 'wifi' },
    { from: 'wifi', to: 'cloud' },
    { from: 'cloud', to: 'app' },
    { from: 'microcontroller', to: 'actuator' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMouseTracking();
    initializeBackgroundElements();
    initializeNavigation();
    initializeSkillsSection();
    initializeProjectsSection(); 
    initializeGameSection();
    initializeContactSection();
    initializeScrollAnimations();
    initializeAchievementsSection();
});

// Mouse tracking functionality
function initializeMouseTracking() {
    const mouseFollower = document.getElementById('mouseFollower');
    
    document.addEventListener('mousemove', function(e) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        
        if (mouseFollower) {
            mouseFollower.style.left = (e.clientX - 40) + 'px';
            mouseFollower.style.top = (e.clientY - 40) + 'px';
        }
    });
}

// Background animated elements
function initializeBackgroundElements() {
    const bgElements = document.querySelector('.bg-elements');
    
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'bg-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 2 + 's';
        dot.style.animation = i % 2 === 0 ? 'float 3s ease-in-out infinite' : 'float 3s ease-in-out infinite reverse';
        bgElements.appendChild(dot);
    }
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu
                navMenu.style.display = 'none';
            }
        });
    });
}

// Skills section functionality
function initializeSkillsSection() {
    const skillsGrid = document.getElementById('skillsGrid');
    const skillsFilter = document.getElementById('skillsFilter');
    
    // Render skills
    function renderSkills(filteredSkills) {
        skillsGrid.innerHTML = '';
        filteredSkills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.style.animationDelay = (index * 0.1) + 's';
            
            skillCard.innerHTML = `
                <div class="skill-header">
                    <div class="skill-name">${skill.icon} ${skill.name}</div>
                    <div class="skill-level">${skill.level}%</div>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-fill" style="width: ${skill.level}%"></div>
                </div>
                <div class="skill-category">${skill.category}</div>
            `;
            
            skillsGrid.appendChild(skillCard);
        });
    }
    
    // Filter functionality
    skillsFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            // Update active button
            skillsFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter skills
            const category = e.target.getAttribute('data-category');
            const filteredSkills = category === 'All' ? skills : skills.filter(skill => skill.category === category);
            
            renderSkills(filteredSkills);
        }
    });
    
    // Initial render
    renderSkills(skills);
}

// Projects section functionality  
function initializeProjectsSection() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsFilter = document.getElementById('projectsFilter');
    
    function getCategoryColor(category) {
        const colors = {
            'Smart Home': 'badge-smart-home',
            'Industrial': 'badge-industrial', 
            'Healthcare': 'badge-healthcare',
            'Agriculture': 'badge-agriculture',
            'Smart City': 'badge-smart-home'
        };
        return colors[category] || 'badge-smart-home';
    }
    
    function getStatusColor(status) {
        return status === 'Active' ? 'badge-active' : 'badge-completed';
    }
    
    // Render projects
    function renderProjects(filteredProjects) {
        projectsGrid.innerHTML = '';
        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = (index * 0.1) + 's';
            
            const metricsEntries = Object.entries(project.metrics);
            const links = [];
            if (project.githubUrl) links.push(`<a href="${project.githubUrl}" class="btn-outline">GitHub</a>`);
            if (project.liveUrl) links.push(`<a href="${project.liveUrl}" class="btn-tech">Live Demo</a>`);
            
            projectCard.innerHTML = `
                <div class="project-image">🏗️</div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-badges">
                            <span class="project-badge ${getCategoryColor(project.category)}">${project.category}</span>
                            <span class="project-badge ${getStatusColor(project.status)}">${project.status}</span>
                        </div>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-metrics">
                        ${metricsEntries.map(([key, value]) => `
                            <div class="metric">
                                <div class="metric-value">${value}</div>
                                <div class="metric-label">${key}</div>
                            </div>
                        `).join('')}
                    </div>
                    ${links.length > 0 ? `<div class="project-links">${links.join('')}</div>` : ''}
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Filter functionality
    projectsFilter.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            // Update active button
            projectsFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter projects
            const category = e.target.getAttribute('data-category');
            const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);
            
            renderProjects(filteredProjects);
        }
    });
    
    // Initial render
    renderProjects(projects);
}

// Game section functionality
function initializeGameSection() {
    gameState.nodes = [...gameNodes];
    gameState.connections = [];
    gameState.selectedNode = null;
    gameState.gameCompleted = false;
    gameState.score = 0;
    gameState.attempts = 0;
    
    renderGame();
    
    document.getElementById('resetGame').addEventListener('click', resetGame);
}

function renderGame() {
    const gameSvg = document.getElementById('gameSvg');
    
    // Clear existing content
    gameSvg.innerHTML = '';
    
    // Render connections
    gameState.connections.forEach(connection => {
        const fromNode = gameState.nodes.find(n => n.id === connection.from);
        const toNode = gameState.nodes.find(n => n.id === connection.to);
        
        if (fromNode && toNode) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', fromNode.position.x);
            line.setAttribute('y1', fromNode.position.y);
            line.setAttribute('x2', toNode.position.x);
            line.setAttribute('y2', toNode.position.y);
            line.setAttribute('class', 'game-connection');
            gameSvg.appendChild(line);
        }
    });
    
    // Render nodes
    gameState.nodes.forEach(node => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', `game-node ${node.id === gameState.selectedNode ? 'selected' : ''} ${node.connected ? 'connected' : ''}`);
        g.setAttribute('data-node-id', node.id);
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.position.x);
        circle.setAttribute('cy', node.position.y);
        circle.setAttribute('r', '30');
        circle.setAttribute('fill', getNodeColor(node));
        circle.setAttribute('stroke', '#00D4FF');
        circle.setAttribute('stroke-width', '2');
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', node.position.x);
        text.setAttribute('y', node.position.y + 5);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '20');
        text.textContent = node.icon;
        
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', node.position.x);
        label.setAttribute('y', node.position.y + 50);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', '#9CA3AF');
        label.setAttribute('font-size', '12');
        label.textContent = node.label;
        
        g.appendChild(circle);
        g.appendChild(text);
        g.appendChild(label);
        
        g.addEventListener('click', () => handleNodeClick(node.id));
        
        gameSvg.appendChild(g);
    });
    
    // Update game stats
    updateGameStats();
}

function getNodeColor(node) {
    if (node.id === gameState.selectedNode) return '#C084FC';
    if (node.connected) return '#22C55E';
    return '#1F2937';
}

function handleNodeClick(nodeId) {
    if (gameState.gameCompleted) return;
    
    if (gameState.selectedNode === null) {
        gameState.selectedNode = nodeId;
    } else if (gameState.selectedNode === nodeId) {
        gameState.selectedNode = null;
    } else {
        // Try to create connection
        const connection = { from: gameState.selectedNode, to: nodeId };
        const reverseConnection = { from: nodeId, to: gameState.selectedNode };
        
        // Check if this is a valid connection
        const isValid = correctConnections.some(conn => 
            (conn.from === connection.from && conn.to === connection.to) ||
            (conn.from === connection.to && conn.to === connection.from)
        );
        
        gameState.attempts++;
        
        if (isValid) {
            // Add connection if it doesn't exist
            const exists = gameState.connections.some(conn => 
                (conn.from === connection.from && conn.to === connection.to) ||
                (conn.from === connection.to && conn.to === connection.from)
            );
            
            if (!exists) {
                gameState.connections.push(connection);
                gameState.score += 10;
                
                // Mark nodes as connected
                const fromNode = gameState.nodes.find(n => n.id === connection.from);
                const toNode = gameState.nodes.find(n => n.id === connection.to);
                if (fromNode) fromNode.connected = true;
                if (toNode) toNode.connected = true;
            }
        } else {
            gameState.score = Math.max(0, gameState.score - 2);
        }
        
        gameState.selectedNode = null;
        
        // Check if game is completed
        if (gameState.connections.length >= correctConnections.length) {
            gameState.gameCompleted = true;
            document.getElementById('nextLevel').style.display = 'inline-block';
        }
        
        renderGame();
    }
}

function resetGame() {
    gameState.nodes = gameNodes.map(node => ({ ...node, connected: false }));
    gameState.connections = [];
    gameState.selectedNode = null;
    gameState.gameCompleted = false;
    gameState.score = 0;
    gameState.attempts = 0;
    
    document.getElementById('nextLevel').style.display = 'none';
    renderGame();
}

function updateGameStats() {
    document.getElementById('gameScore').textContent = gameState.score;
    document.getElementById('gameAttempts').textContent = gameState.attempts;
    document.getElementById('gameConnections').textContent = `${gameState.connections.length}/${correctConnections.length}`;
}

// Contact section functionality
function initializeContactSection() {
    const contactSection = document.getElementById('contactSection');
    const contactForm = document.getElementById('contactForm');
    
    // Mouse trail effect
    contactSection.addEventListener('mousemove', function(e) {
        const rect = contactSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create trail dot
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        
        contactSection.appendChild(dot);
        
        // Remove dot after animation
        setTimeout(() => {
            if (dot.parentNode) {
                dot.parentNode.removeChild(dot);
            }
        }, 1000);
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Form submitted:', data);
        
        // Show success message (you would replace this with actual form submission)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Achievements section functionality
function initializeAchievementsSection() {
    const grid = document.getElementById('achievementsGrid');
    const filterBar = document.getElementById('achievementsFilter');
    if (!grid || !filterBar) return;

    filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        // toggle active class
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // show/hide cards
        Array.from(grid.querySelectorAll('.achievement-card')).forEach(card => {
            const cardCat = card.getAttribute('data-category') || '';
            card.style.display = (category === 'All' || cardCat === category) ? '' : 'none';
        });
    });
}

// ensure it runs after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAchievementsSection);
} else {
    initializeAchievementsSection();
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Utility functions
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add smooth scrolling to all internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
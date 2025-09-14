// Function with parameters — demonstrates scope and parameter usage
function triggerAnimation(elementId, animationClass) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add(animationClass);
        let timeoutId = setTimeout(() => {
            element.classList.remove(animationClass);
        }, 2000);
        
        function cleanup() {
            clearTimeout(timeoutId);
        }
        return cleanup;
    }
}

// Toggle slide-in functionality
function toggleSlideIn(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('active');
    }
}

// Event Listeners
document.getElementById('animateBtn').addEventListener('click', () => {
    const cleanup = triggerAnimation('successMsg', 'show');
    setTimeout(cleanup, 3000);
});
document.getElementById('toggleBtn').addEventListener('click', () => {
    toggleSlideIn('slideContent');
    });

// Demonstrate block scope vs function scope
function demonstrateScope() {
    var functionScoped = "I'm function-scoped (var)";
    let blockScoped = "I'm block-scoped (let)";
    const constant = "I'm a constant";
    
    if (true) {
        let blockScopedInside = "This only exists inside this block";
        var functionScopedInside = "This leaks to function scope!";
    }
    
    return { functionScoped, blockScoped, constant };
}

const scopeDemo = demonstrateScope();

// Initialize fade-in on load
document.addEventListener('DOMContentLoaded', () => {
    
});
# 📸 Instagram Clone - Django React Native

A full-stack Instagram clone built with Django REST Framework backend and React Native frontend, featuring real-time social media functionality with modern UI/UX design.

## 🌟 Features

### Core Social Media Features
- **User Authentication & Authorization** - JWT-based authentication system
- **User Profiles** - Customizable profiles with bio, profile photos, and privacy settings
- **Posts & Media** - Share images with captions and titles
- **Stories** - 24-hour ephemeral content with view tracking
- **Comments & Likes** - Interactive engagement on posts
- **Follow System** - Follow/unfollow users with private account support
- **Notifications** - Real-time activity notifications
- **Saved Posts** - Bookmark and organize favorite content
- **Search & Discovery** - Find users and content

### Technical Features
- **RESTful API** - Comprehensive Django REST Framework backend
- **Real-time Updates** - Live notifications and activity feeds
- **Media Management** - Image upload and storage system
- **Responsive Design** - Cross-platform React Native mobile app
- **State Management** - Redux Toolkit for global state
- **Navigation** - Tab-based navigation with stack navigation
- **Security** - JWT authentication, CSRF protection, and input validation

## 🛠 Tech Stack

### Backend (Django)
- **Framework**: Django 4.x
- **API**: Django REST Framework
- **Authentication**: JWT (Simple JWT)
- **Database**: PostgreSQL
- **File Storage**: Local media storage
- **Additional**: Django Humanize, Django Cleanup

### Frontend (React Native)
- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **State Management**: Redux Toolkit + React Redux
- **Styling**: React Native Extended Stylesheet
- **Storage**: Expo Secure Store + React Native Encrypted Storage
- **UI Components**: Custom components with modern design

## 📁 Project Structure

```
Django-React-Instagram-Clone/
├── backend/                    # Django Backend
│   └── CONFIG/
│       ├── CONFIG/            # Django settings & configuration
│       ├── UserAPP/           # User management & authentication
│       ├── PostAPP/           # Posts & media handling
│       ├── StoryAPP/          # Stories functionality
│       ├── CommentAPP/        # Comments system
│       ├── LikeAPP/           # Like/unlike functionality
│       ├── FollowAPP/         # Follow/unfollow system
│       ├── NotificationAPP/   # Notifications
│       ├── SavedPostAPP/      # Saved posts management
│       └── media/             # Uploaded media files
└── frontend/                  # React Native Frontend
    └── instagramClone/
        ├── src/
        │   ├── api/           # API integration
        │   ├── components/    # Reusable UI components
        │   ├── screens/       # Screen components
        │   ├── redux/         # State management
        │   └── constants/     # Configuration constants
        └── assets/            # Images and icons
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL
- Expo CLI
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Django-React-Instagram-Clone/backend/CONFIG
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Database setup**
   ```bash
   # Create PostgreSQL database
   createdb instagram
   
   # Run migrations
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the server**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../../frontend/instagramClone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## 🔧 Configuration

### Backend Configuration
Update `backend/CONFIG/CONFIG/settings.py`:
- Database credentials
- SECRET_KEY for production
- ALLOWED_HOSTS
- Media file paths

### Frontend Configuration
Update `frontend/instagramClone/src/constants/config.js`:
- API base URL
- Local IP address for development

## 📱 API Endpoints

### Authentication
- `POST /api/token/` - Login and get JWT token
- `POST /api/token/refresh/` - Refresh JWT token

### Users
- `GET /api/user/profile/` - Get user profile
- `PUT /api/user/profile/` - Update user profile
- `POST /api/user/register/` - User registration
- `GET /api/user/search/` - Search users

### Posts
- `GET /api/post/` - Get posts feed
- `POST /api/post/` - Create new post
- `GET /api/post/{id}/` - Get specific post
- `DELETE /api/post/{id}/` - Delete post

### Stories
- `GET /api/story/` - Get stories
- `POST /api/story/` - Create new story
- `POST /api/story/{id}/read/` - Mark story as read

### Comments
- `GET /api/comment/{post_id}/` - Get post comments
- `POST /api/comment/` - Add comment
- `DELETE /api/comment/{id}/` - Delete comment

### Likes
- `POST /api/like/{post_id}/` - Like/unlike post

### Follow
- `POST /api/follow/{user_id}/` - Follow/unfollow user
- `GET /api/follow/followers/` - Get followers
- `GET /api/follow/following/` - Get following

### Saved Posts
- `GET /api/savedpost/` - Get saved posts
- `POST /api/savedpost/{post_id}/` - Save/unsave post

### Notifications
- `GET /api/notification/` - Get notifications

## 🎨 Key Components

### Backend Models
- **ModelUser**: Custom user model with profile photo, bio, and privacy settings
- **ModelPost**: Posts with images, titles, and timestamps
- **ModelStory**: 24-hour stories with view tracking
- **ModelComment**: Comments on posts
- **ModelFollower**: Follow relationships
- **ModelNotification**: User activity notifications

### Frontend Components
- **Authentication**: Login/Register screens
- **Home**: Post feed with stories
- **Profile**: User profile with posts grid
- **Navigation**: Bottom tab navigation
- **Post**: Individual post component with interactions
- **Story**: Story viewer component

## 🔒 Security Features

- JWT-based authentication
- CSRF protection
- Input validation and sanitization
- Secure file upload handling
- Rate limiting on API endpoints
- Private account support

## 📊 Database Schema

The application uses PostgreSQL with the following key tables:
- **Users**: User accounts and profiles
- **Posts**: User posts with media
- **Stories**: Ephemeral story content
- **Comments**: Post comments
- **Likes**: Post likes
- **Followers**: User relationships
- **Notifications**: User activity notifications
- **SavedPosts**: User saved content

## 🚀 Deployment

### Backend Deployment
1. Set up production database
2. Configure environment variables
3. Set DEBUG = False
4. Configure static/media file serving
5. Set up WSGI server (Gunicorn)

### Frontend Deployment
1. Build the app for production
2. Deploy to app stores or web
3. Configure API endpoints for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Instagram for inspiration
- Django and React Native communities
- Expo team for the development platform

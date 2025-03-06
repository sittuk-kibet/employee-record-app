export default function withRole(roles) {
    return async (req, res, next) => {
      const session = await getSession({ req });
      
      if (!session || !roles.includes(session.user.role)) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      
      next();
    };
  }
  
  // Usage in API routes:
  import withRole from '../../middleware/withRole';
  // export default withRole(['Admin'])(handler);
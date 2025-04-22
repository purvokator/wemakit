
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import NotificationsDropdown from './NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown';

interface HeaderSectionProps {
  user: any;
  handleLogout: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ user, handleLogout }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center gap-4">
        <AnimatePresence>
          {isSearchOpen ? (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full lg:w-64"
            >
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 bg-muted"
                autoFocus
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="hidden lg:flex relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-8 bg-muted"
          />
        </div>
        
        <Button variant="outline" size="sm" className="hidden md:flex gap-1">
          <Command className="h-3.5 w-3.5" />
          <span className="text-xs">⌘K</span>
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <NotificationsDropdown />
        
        {user && (
          <ProfileDropdown user={user} handleLogout={handleLogout} />
        )}
      </div>
    </header>
  );
};

export default HeaderSection;

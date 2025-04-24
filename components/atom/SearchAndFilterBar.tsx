"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'

interface FilterOption {
  label: string
  value: string
  group: string
}

interface SearchAndFilterBarProps {
  placeholder?: string
  onSearch: (term: string) => void
  onFilterChange: (filters: Record<string, string[]>) => void
  filterOptions: FilterOption[]
}

export default function SearchAndFilterBar({
  placeholder = "Search...",
  onSearch,
  onFilterChange,
  filterOptions
}: SearchAndFilterBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [showFilters, setShowFilters] = useState(false)
  
  // Group filter options
  const groupedFilters = filterOptions.reduce((acc, option) => {
    if (!acc[option.group]) {
      acc[option.group] = []
    }
    acc[option.group].push(option)
    return acc
  }, {} as Record<string, FilterOption[]>)
  
  const handleSearch = () => {
    onSearch(searchTerm)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  
  const toggleFilter = (group: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev }
      if (!newFilters[group]) {
        newFilters[group] = []
      }
      
      if (newFilters[group].includes(value)) {
        newFilters[group] = newFilters[group].filter(v => v !== value)
        if (newFilters[group].length === 0) {
          delete newFilters[group]
        }
      } else {
        newFilters[group] = [...newFilters[group], value]
      }
      
      return newFilters
    })
  }
  
  const clearFilters = () => {
    setSelectedFilters({})
    onFilterChange({})
  }
  
  const applyFilters = () => {
    onFilterChange(selectedFilters)
    setShowFilters(false)
  }
  
  const removeFilter = (group: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev }
      newFilters[group] = newFilters[group].filter(v => v !== value)
      if (newFilters[group].length === 0) {
        delete newFilters[group]
      }
      return newFilters
    })
    
    onFilterChange({
      ...selectedFilters,
      [group]: selectedFilters[group]?.filter(v => v !== value) || []
    })
  }
  
  // Count total active filters
  const filterCount = Object.values(selectedFilters).reduce((count, values) => count + values.length, 0)
  
  return (
    <div className="w-full space-y-2">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-4 h-11"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleSearch} 
            className="md:w-auto w-full"
          >
            Хайх
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto w-full"
          >
            Шүүлтүүр {filterCount > 0 && <Badge className="ml-2">{filterCount}</Badge>}
          </Button>
          
          {filterCount > 0 && (
            <Button 
              variant="ghost" 
              onClick={clearFilters}
              className="md:block hidden"
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      
      {/* Active filters display */}
      {filterCount > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.entries(selectedFilters).map(([group, values]) => (
            values.map(value => (
              <Badge 
                key={`${group}-${value}`} 
                variant="secondary"
                className="pl-2 pr-1 py-1 flex items-center gap-1"
              >
                {value}
                <button
                  onClick={() => removeFilter(group, value)}
                  className="ml-1 rounded-full hover:bg-muted-foreground/20 p-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))
          ))}
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="md:hidden block text-xs h-7"
          >
            Clear All
          </Button>
        </div>
      )}
      
      {/* Filter popup */}
      {showFilters && (
        <div className="bg-card border rounded-lg shadow-lg p-4 mt-2 z-10">
          <div className="max-h-96 overflow-y-auto">
            {Object.entries(groupedFilters).map(([group, options]) => (
              <div key={group} className="mb-6 last:mb-0">
                <h3 className="font-medium mb-3 text-lg">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <Badge
                      key={option.value}
                      variant={selectedFilters[group]?.includes(option.value) ? 'default' : 'outline'}
                      className="cursor-pointer px-3 py-1"
                      onClick={() => toggleFilter(group, option.value)}
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowFilters(false)}>
            Цуцлах
            </Button>
            <Button onClick={applyFilters}>
            Шүүлтүүр хэрэглэх   
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
"use client"

import * as React from "react"
import { Search, MoreVertical, Edit, Trash2, Plus, Phone } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

const MOCK_DATA = [
  { id: 1, name: "Main Office", number: "+1 (555) 123-4567", role: "Admin", status: "Active" },
  { id: 2, name: "Sales Team", number: "+1 (555) 987-6543", role: "Member", status: "Active" },
  { id: 3, name: "Support", number: "+1 (555) 456-7890", role: "Member", status: "Inactive" },
  { id: 4, name: "Technician 1", number: "+1 (555) 111-2222", role: "Member", status: "Active" },
  { id: 5, name: "Technician 2", number: "+1 (555) 333-4444", role: "Member", status: "Active" },
]

export function PhoneNumberTable() {
  const [searchTerm, setSearchTerm] = React.useState("")
  
  const filteredData = MOCK_DATA.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.number.includes(searchTerm)
  )

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div>
            <h3 className="text-lg font-bold">Team Numbers</h3>
            <p className="text-sm text-muted-foreground">Manage additional phone numbers.</p>
        </div>
        <Button className="w-full sm:w-auto gap-2">
            <Plus className="h-4 w-4" />
            Add Team Member Number
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search by name or number..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Phone Number</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y">
                {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium">{item.name}</td>
                        <td className="p-4 font-mono text-muted-foreground">{item.number}</td>
                        <td className="p-4">{item.role}</td>
                        <td className="p-4">
                            <Badge variant={item.status === "Active" ? "success" : "secondary"}>
                                {item.status}
                            </Badge>
                        </td>
                        <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Edit className="h-4 w-4 text-muted-foreground hover:text-primary" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-600" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      
      {/* Pagination Mock */}
      <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
        <span>Showing {filteredData.length} of {MOCK_DATA.length} numbers</span>
        <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </Card>
  )
}


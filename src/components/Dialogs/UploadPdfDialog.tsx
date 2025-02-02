"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import React, { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import {  BookUp2 } from 'lucide-react'

interface UploadPdfDialogProps {
    children?: React.ReactNode;
}

const UploadPdfDialog: React.FC<UploadPdfDialogProps> = ({ children }) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useUser();
    const [fileName, setFileName] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const OnFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const OnUpload = async () => {
        if (!file) return;

        setLoading(true);
        
        try {
            // Upload logic should be implemented here
            console.log("Uploading file:", fileName || file.name);
            setOpen(false);
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    
                    <Button onClick={() => setOpen(true)} className="w-full"><BookUp2 />  Chat with PDF</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload Pdf File</DialogTitle>
                        <DialogDescription asChild>
                            <div className="mt-5">
                                <h2>Select a file to Upload *</h2>
                                <div className="gap-2 p-3 rounded-md border">
                                    <input 
                                        type="file"  
                                        accept="application/pdf" 
                                        onChange={OnFileSelect}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label>File Name *</label>
                                    <Input 
                                        placeholder="File Name" 
                                        onChange={(e) => setFileName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button onClick={OnUpload} disabled={loading}>
                            {loading ? <Loader2Icon className="animate-spin" /> : 'Upload'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UploadPdfDialog;
